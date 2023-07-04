import{useEffect, useState} from 'react'
import supabase from './client'
import Creator from './Components/creators';




export default function ShowCreator(){
 
    const [allCreators, setAllCreators] = useState([])

    useEffect(()=>{
        async function getCreator(){
            try{
                const{data,error} = await supabase.from("creators").select([{id,name,youtube,twitter,instagram,description,imageUrl}]).order("id",{ascending: true})
                if(error){
                    console.log(error)
                }
                else{
                    setAllCreators(data)
                }
            }
            catch(error){
                console.log(error)
            }
        }
        getCreator()
    },[])

    return(
        <div id='ShowCreator'>
            {allCreators.map((creator)=>(
                <div key={creator.id}>
                    <Creator creator={creator}/>
                    <div id='buttonContainer'>
                       <button href='EditCreator/${creator.id}'></button>
                       <button href='ViewCreator/${creator.id}'></button>
                    </div>
                    
                </div>
            )
            
            )}
        </div>
    )
}