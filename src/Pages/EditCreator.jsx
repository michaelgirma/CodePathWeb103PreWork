import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import supabase from '../client'






export default function EditCreator(){
    const [name, setName] = useState('');
    const [youtube, setYoutube] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const {id} = useParams()
    
    const handleSubmit = async(event) => {
        event.preventDefault()
        try{
            const{data,error} = await supabase.from("creators").update([{name,youtube,twitter,instagram,description,imageUrl}])
            console.log(data)
            if(error){
                console.log(error)
            }
        }
        catch(error){
            console.log(error)
        }
    }

    const handleDelete = async() => {
        try{
            const {error} = await supabase.from("creators").delete([{}]).eq("id", id)
            if(error){
                console.log(error)
            }
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        async function getCreator(){
            try{
                const{data,error} = await supabase.from("creators").select([{name,youtube,twitter,instagram,description,imageUrl}]).eq("id",id).single()
                if(error){
                    console.log(error)
                }
                else{
                    setName(data.name)
                    setYoutube(data.youtube)
                    setTwitter(data.twitter)
                    setInstagram(data.instagram)
                    setDescription(data.description)
                    setImageUrl(data.imageUrl)
                }
            }
            catch(error){
                console.log(error)
            }
        }
        getCreator()
    },[id])
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <input type="text" onChange={(e)=>setYoutube(e.target.value)} value={youtube}/>
                <input type="text" onChange={(e)=>setTwitter(e.target.value)} value={twitter}/>
                <input type="text" onChange={(e)=>setInstagram(e.target.value)} value={Instagram}/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>

                <button id='submit' type='submit'>Submit</button>
                <button id="delete" type='button' onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
}