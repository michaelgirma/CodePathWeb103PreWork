import {useState} from 'react'
import supabase from '../client'


export default function AddCreator(){

    const [name, setName] = useState('');
    const [youtube, setYoutube] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault()
        try{
            const{data,error} = await supabase.from("creators").insert([{name,youtube,twitter,instagram,description,imageUrl}])
            console.log(data)
            if(error){
                console.log(error)
            }
        }
        catch{
            console.log(error)
        }
    }
    
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <input type="text" onChange={(e)=>setYoutube(e.target.value)} value={youtube}/>
                <input type="text" onChange={(e)=>setTwitter(e.target.value)} value={twitter}/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>

                <button id='submit' type='submit'>Submit</button>
            </form>
            
        </div>
    )
}