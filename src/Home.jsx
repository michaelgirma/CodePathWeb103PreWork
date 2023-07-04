import{useEffect, useState} from 'react'
import Creator from './Components/creators'
import supabase from './client';

export default function Home(){


    const [recentCreators, setRecentCreators] = useState([])

    useEffect(()=>{
        async function getCreator(){
            try{
                const{data,error} = await supabase.from("creators").select([{id,name,youtube,twitter,instagram,description,imageUrl}]).order("id",{ascending:false}).limit(2)
                if(error){
                    console.log(error)
                }
                else{
                    setRecentCreators(data)
                }
            }
            catch(error){
                console.log(error)
            }
        }
        getCreator()
    },[id])

    return(
        <div id='Home'>
            {recentCreators.map((creator)=>(
                <div key={creator.id}>
                    <Creator creator={creator}/>
                    <div id='buttonContainer'>
                       <button href='EditCreator/${creator.id}'></button>
                       <button href='ViewCreator/${creator.id}'></button>
                    </div>
                    
                </div>
            )
            
            )}
            
            <style>{`
            #Home {
                color: white;
                border: 1px solid blue;
            }
            
            
            
            `}</style>
        </div>
    
    )
}
