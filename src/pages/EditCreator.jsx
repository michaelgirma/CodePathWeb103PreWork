import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import supabase from '../client'
import backgroundImage from '../assets/moving-globe.gif';
import { Link } from 'react-router-dom';

export default function EditCreator(){
    const [Name, setName] = useState('');
    const [Youtube, setYoutube] = useState('');
    const [Twitter, setTwitter] = useState('');
    const [Instagram, setInstagram] = useState('');
    const [Description, setDescription] = useState('');
    const [ImageUrl, setImageUrl] = useState('');

    const {id} = useParams()
    
    const handleSubmit = async(event) => {
        event.preventDefault()
        try{
            const{data,error} = await supabase.from("Creators").update({Name,Youtube,Twitter,Instagram,Description,imageURL})
            console.log(data)
            if (error) {
                console.log('error', error);
              } else {
                console.log('Creator updated successfully');
                setName(data.Name);
                setYoutube(data.Youtube);
                setTwitter(data.Twitter);
                setInstagram(data.Instagram);
                setDescription(data.Description);
                setImageUrl(data.imageURL);
              }
        }
        catch(error){
            console.log(error)
        }
    }

    const handleDelete = async() => {
        try{
            const {error} = await supabase.from("Creators").delete().eq("id", id)
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
                const{data,error} = await supabase
                .from("Creators")
                .select('Name,Youtube,Twitter,Instagram,Description,imageURL')
                .eq("id",id)
                .single()

                if(error){
                    console.log(error)
                }
                else{
                    setName(data.Name)
                    setYoutube(data.Youtube)
                    setTwitter(data.Twitter)
                    setInstagram(data.Instagram)
                    setDescription(data.Description)
                    setImageUrl(data.imageURL)
                }
            }
            catch(error){
                console.log(error)
            }
        }
        getCreator()
    },[id])
    
    return(
        <div id='EditCreator'>
            <div id="EditCreatorContainer">
                <div id="EditCreatorBackgroundContainer">
                    <img  id='EditBackgroundImage' src={backgroundImage} />
                    <div id="EditHeaderContainer">
                        <h1 id="">Add Creator</h1>
                    </div>
                    <div id="EditHomeButtonContainer">
                        <a id='EditHomeButton' href='/'>Home</a>
                    </div>
                </div>
                <div id="EditListFormContainer">
                    <form id='EditListForm' onSubmit={handleSubmit}>
                        <div id="EditFormInputContainer">
                            <input type="text" id='AddName' placeholder="Name"  onChange={(e)=>setName(e.target.value)} value={Name} required/>    
                            <input type="text" id='AddImageUrl' placeholder="ImageUrl" onChange={(e)=>setImageUrl(e.target.value)} value={ImageUrl} required/>   
                            <input type="text" id='AddDescription' placeholder="Description" onChange={(e)=>setDescription(e.target.value)} value={Description} required/> 
                            <input type="text" id='AddYoutube' placeholder="Youtube" onChange={(e)=>setYoutube(e.target.value)} value={Youtube} />
                            <input type="text" id='AddTwitter' placeholder="Twitter" onChange={(e)=>setTwitter(e.target.value)} value={Twitter} />
                            <input type="text" id='AddInstagram' placeholder="Instagram" onChange={(e)=>setInstagram(e.target.value)} value={Instagram} />

                            <button id='submit' type='submit'>Submit</button>
                            <button id="delete" type='button' onClick={handleDelete}>Delete</button>
                        </div>
                    </form>
                </div>
            </div>

            <style>{`
            #EditCreator{
                display: flex;
                position: relative;
                width: 100%;
                height: 200vh;
                flex-direction: column;
                border: 1px solid red;
            }
            #EditCreatorContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 1px solid red;
            }
            
            `}</style>
        </div>
    )
}