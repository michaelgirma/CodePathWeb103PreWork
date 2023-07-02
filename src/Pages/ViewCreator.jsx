import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"


export default function ViewCreator(){

    const {id} = useParams();

    const [oneCreator, setOneCreator] = useState(null)

    useEffect(()=>{
        async function getCreator(){
            try{
                const{data,error} = await supabase.from("creators").select([{id,name,youtube,twitter,instagram,description,imageUrl}]).eq("id",id).single()
                if(error){
                    console.log(error)
                }
                else{
                    setOneCreator(data)
                }
            }
            catch(error){
                console.log(error)
            }
        }
        getCreator()
    },[id])

    return(
        <div id="ViewCreator">
            <div>
                <Creator creator={oneCreator}/>
            </div>
        </div>
    )
}