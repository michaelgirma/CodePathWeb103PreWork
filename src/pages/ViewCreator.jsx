import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import supabase from '../client'
import Creator from '../Components/creators';



export default function ViewCreator(){

    const {id} = useParams();

    const [oneCreator, setOneCreator] = useState(null)

    useEffect(()=>{
        async function getCreator(){
            try{
                const{data,error} = await supabase.from("Creators").select('id,Name,Youtube,Twitter,Instagram,Description,imageURL').eq("id",id).single()
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

    if (!oneCreator) {
        return <div>Loading...</div>;
      }

    return(
        <div id="ViewCreator">
            <div>
                <Creator creator={creator}/>
            </div>
        </div>
    )
}