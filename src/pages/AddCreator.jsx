import {useState} from 'react'
import supabase from '../client'
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function AddCreator(){

    const [Name, setName] = useState('');
    const [Youtube, setYoutube] = useState('');
    const [Twitter, setTwitter] = useState('');
    const [Instagram, setInstagram] = useState('');
    const [Description, setDescription] = useState('');
    const [imageURL, setImageUrl] = useState('');

    const redirect = () => {
        window.location.href = '/';
      };



    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data, error } = await supabase.from('Creators').insert([{ Name, Youtube, Twitter, Instagram, Description, imageURL }]);
    
            console.log('data:', data);
    
          if (error) {
            console.log('error', error);
          } else {
            console.log('Creator added successfully');
          }
          
        } catch (error) {
          console.log('error', error);
        }
      };
    
    return(
        <div id='AddCreator'>
            <div id="AddCreatorContainer">
                <div id="HomeBackgroundContainer">
                    <img id='AddCreatorBackgroundImage' src="https://i.imgur.com/F4ztSGV.gif?noredirect"/>
                    <div id="AddHeaderContainer">
                        <h1 id="AddHeader">Add Creator</h1>
                    </div>
                    <div id="AddHomeContainer">
                        <Link to='/'>
                            <button id='HomeButton'><AiOutlineHome/></button>
                        </Link>
                    </div>
                </div>
                <div id="AddListFormContainer">
                    <form id='AddCreatorForm' onSubmit={handleSubmit}>
                        <div id="AddFormInputContainer">

                                <div id="NameHeaderContainer">
                                    <p className="inputHeader">Name</p>
                                    <p className='inputDescription'>Write your creators Name</p>
                                </div>
                            <input type="text" id='AddName' placeholder = "Name"  onChange={(e)=>setName(e.target.value)} value={Name} required/>

                                <div id="ImageHeaderContainer">
                                    <p className="inputHeader">Image Link</p>
                                    <p className='inputDescription'>Provide a link that shows what your creator looks like</p>
                                </div>
                            <input type="text" id='AddImageUrl' placeholder = "ImageUrl" onChange={(e)=>setImageUrl(e.target.value)} value={imageURL} required/>

                                <div id="DescriptionHeaderContainer">
                                    <p className="inputHeader">Description</p>
                                    <p className='inputDescription'>Provide a short description about your creator</p>
                                </div>
                            <input type="text" id='AddDescription' placeholder = "Description" onChange={(e)=>setDescription(e.target.value)} value={Description} required/>

                                <div id="YoutubeHeaderContainer">
                                    <p className="inputHeader">Youtube</p>
                                    <p className='inputDescription'>If applicable, provide a youtube link that belongs to your creator</p>
                                </div>
                            <input type="text" id='AddYoutube' placeholder = "Youtube" onChange={(e)=>setYoutube(e.target.value)} value={Youtube} />

                                <div id="TwitterHeaderContainer">
                                    <p className="inputHeader">Twitter</p>
                                    <p className='inputDescription'>If applicable, provide a twitter link that belongs to your creator</p>
                                </div>
                            <input type="text" id='AddTwitter' placeholder = "Twitter" onChange={(e)=>setTwitter(e.target.value)} value={Twitter} />

                                <div id="InstagramHeaderContainer">
                                    <p className="inputHeader">Instagram</p>
                                    <p className='inputDescription'>If applicable, provide a instagram link that belongs to your creator</p>
                                </div>
                            <input type="text" id='AddInstagram' placeholder = "Instagram" onChange={(e)=>setInstagram(e.target.value)} value={Instagram} />
                        </div>

                        <div id="AddCreatorFormButtonContainer">
                            
                                <button id='submit' type='submit' onClick={redirect}> Submit </button>
                            
                        </div>
                    </form>
                </div>
            </div>
            
            
            <style>{`
            #AddCreator{
                display: flex;
                position: relative;
                width: 100%;
                height: 200vh;
                flex-direction: column;
            }
            #AddCreatorContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            #HomeBackgroundContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 30%;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            #AddCreatorBackgroundImage{
                display: flex;
                position: absolute;
                width: 95%;
                height: 100%;
                object-fit: cover;
                overflow: hidden;
            }
            #AddHeaderContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 45%;
                margin-top: 80px;
                margin-bottom: 25px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 6px;
            }
            #AddHeader{
                display: flex;
                position: relative;
                font-size: 100px;
                font-family: 'InterBold';
            }
            #AddHomeContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 15%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 7%;
                padding-left: 3%;
            }
            #HomeButton{
                display: flex;
                position: relative;
                font-size: 3rem;
                background-color: transparent;
                color: white;
                border: none;
                cursor: pointer;
                padding-right: 50px;
            }
            #HomeButton:hover {
                opacity: 0.9;
                transform: scale(1.1);
                transition: transform 0.2s ease-in-out;
            }
            #AddListFormContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 70%;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            #AddCreatorForm{
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
            }
            #AddFormInputContainer{
                display: flex;
                position: relative;
                width: 80%;
                height: 90%;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: space-between;

            }
            .inputHeader{
                display: flex;
                position: relative;
                font-size: 22px;
                font-family: 'InterBold';
                margin-bottom: 0px;    
            }
            .inputDescription{
                display: flex;
                position: relative;
                font-size: 15px;
                font-style: italic;
                font-family: 'InterRegular';
                margin-top: 0px;
                margin-bottom: 0px;
            }
            #AddCreatorForm input{
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
            #AddCreatorFormButtonContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 15%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                
            }
            #submit{
                display: flex;
                position: relative;
                width: 200px;
                height: 50px;
                justify-content: center;
                align-items: center;
                background-color: white;
                border-radius: 18px;
                margin-right: 25px;
                margin-top: 30px;
                text-decoration: none;
                color: black; 
            }

            @media (max-width: 700px){
                #AddHeader{
                    font-size: 80px;
                }

                #AddFormInputContainer{
                    padding-right: 35px;
                }
            }


                `}
            </style>
        </div>

    )
}