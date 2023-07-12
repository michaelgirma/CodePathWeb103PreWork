import {useState, useEffect,} from 'react'
import {useParams} from 'react-router-dom'
import supabase from '../client'
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

export default function EditCreator(){
    const [Name, setName] = useState('');
    const [Youtube, setYoutube] = useState('');
    const [Twitter, setTwitter] = useState('');
    const [Instagram, setInstagram] = useState('');
    const [Description, setDescription] = useState('');
    const [imageURL, setImageUrl] = useState('');

    const {id} = useParams()

    const redirect = () => {
        window.location.href = '/';
    };
    
    const handleSubmit = async(event) => {
        event.preventDefault()
        try{
            const{data,error} = await supabase.from("Creators")
            .update({Name,Youtube,Twitter,Instagram,Description,imageURL})
            .eq('id', id);

            console.log(data)

            redirect();

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
              redirect();
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
            redirect();
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
                    <img  id='EditBackgroundImage' src="https://i.imgur.com/F4ztSGV.gif?noredirect" />
                    <div id="EditHeaderContainer">
                        <h1 id="EditHeader">Edit Creator</h1>
                    </div>
                    <div id="EditHomeButtonContainer">
                        <Link to='/'>
                            <button id='EditHomeButton'><AiOutlineHome/></button>
                        </Link>
                    </div>
                </div>
                <div id="EditListFormContainer">
                    <form id='EditListForm' onSubmit={handleSubmit}>
                        <div id="EditFormInputContainer">
                            <input type="text" id='AddName' placeholder="Name"  onChange={(e)=>setName(e.target.value)} value={Name} required/>    
                            <input type="text" id='AddImageUrl' placeholder="ImageUrl" onChange={(e)=>setImageUrl(e.target.value)} value={imageURL} required/>   
                            <input type="text" id='AddDescription' placeholder="Description" onChange={(e)=>setDescription(e.target.value)} value={Description} required/> 
                            <input type="text" id='AddYoutube' placeholder="Youtube" onChange={(e)=>setYoutube(e.target.value)} value={Youtube} />
                            <input type="text" id='AddTwitter' placeholder="Twitter" onChange={(e)=>setTwitter(e.target.value)} value={Twitter} />
                            <input type="text" id='AddInstagram' placeholder="Instagram" onChange={(e)=>setInstagram(e.target.value)} value={Instagram} />
                            <div id="EditListButtonContainer">
                                <button id="Edit" type="submit">Add Changes</button>
                                <button id="Edit" type='button' onClick={handleDelete}>Delete</button>
                            </div> 
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
            }
            #EditCreatorContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            #EditCreatorBackgroundContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 100%;
                height: 30%;
            }
            #EditBackgroundImage{
                display: flex;
                position: absolute;
                width: 95%;
                height: 100%;
                object-fit: cover;
                overflow: hidden;
            }
            #EditHeaderContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 45%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 9%;
            }
            #EditHeader{
                display: flex;
                position: relative;
                font-size: 100px;
                font-family: 'InterBold';
            }
            #EditHomeButtonContainer{
                display: flex;
                position: relative;
                width: 99%;
                height: 15%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 32px;
                padding-top: 20px;
            }
            #EditHomeButton{
                display: flex;
                position: relative;
                font-size: 3rem;
                background-color: transparent;
                color: white;
                border: none;
                cursor: pointer;
                padding-right: 50px;
            }
            #EditHomeButton:hover {
                opacity: 0.9;
                transform: scale(1.1);
                transition: transform 0.2s ease-in-out;
              }
            #EditListFormContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 99%;
                height: 70%;
            }
            #EditListForm{
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
            }
            #EditFormInputContainer{
                display: flex;
                position: relative;
                width: 80%;
                height: 90%;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: space-between;
            }
            #EditFormInputContainer input{
                display: flex;
                position: relative;
                width: 100%;
                height: 5%;
                font-size: 15px;
                border-radius: 10px;
                padding-left: 10px;
                margin-left: 10px;  
                margin-top: 0px;
            }
            #EditListButtonContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 10%;
                justify-content: space-evenly;
                align-items: center;
            }
            #EditListButtonContainer button{
                display: flex;
                position: relative;
                width: 160px;
                height: 60px;
                font-size: 18px;
                border-radius: 25px;
                background-color: white;
                text-decoration: underline;
                text-decoration-color: white;
                color: black;
                font-family: 'InterSemi';
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
            #Edit:hover {
                opacity: 0.9;
                transform: scale(1.1);
                transition: transform 0.2s ease-in-out;
              }

              @media (max-width: 700px){

                #EditHeaderContainer{
                    padding-top: 80px;
                }

                #EditHeader{
                    font-size: 80px;
                }

                #EditHomeButton{
                    padding-left: 35px;
                }

                #EditFormInputContainer{
                    padding-right: 30px;
                }
              }
            `}</style>
        </div>
    )
}