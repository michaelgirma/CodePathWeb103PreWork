import {useState} from 'react'
import supabase from '../client'
import backgroundImage from '../assets/moving-globe.gif';


export default function AddCreator(){

    const [Name, setName] = useState('');
    const [Youtube, setYoutube] = useState('');
    const [Twitter, setTwitter] = useState('');
    const [Instagram, setInstagram] = useState('');
    const [Description, setDescription] = useState('');
    const [ImageUrl, setImageUrl] = useState('');

    const redirect = () => {
        window.location.href = '/';
      };

    const handleSubmit = async(event) => {
        event.preventDefault()
        try {
            const { data, error } = await supabase.from('Creators').insert([{ Name, Youtube, Twitter, Instagram, Description, imageUrl }]);
      
              console.log('data:', data);
      
        if (error) {
              console.log('error', error);
        } else {
              console.log('Creator added successfully');
        }
        redirect();
         } catch (error) {
            console.log('error', error);
          }
    }
    
    
    return(
        <div id='AddCreator'>
            <div id="AddCreatorContainer">
                <div id="HomeBackgroundContainer">
                    <img class="global" id='AddCreatorBackgroundImage' src={backgroundImage} />
                    <div id="AddHeaderContainer">
                        <h1 id="AddHeader">Add Creator</h1>
                    </div>
                    <div id="AddHomeContainer">
                        <a id='HomeButton' href='/'>Home</a>
                    </div>
                </div>
                <div id="AddListFormContainer">
                    <form id='AddCreatorForm' onSubmit={handleSubmit}>
                        <div id="AddFormInputContainer">

                                <div id="NameHeaderContainer">
                                    <p class="inputHeader">Name</p>
                                    <p class='inputDescription'>Write your creators Name</p>
                                </div>
                            <input type="text" id='AddName' placeholder = "Name"  onChange={(e)=>setName(e.target.value)} value={Name} required/>

                                <div id="ImageHeaderContainer">
                                    <p class="inputHeader">Image Link</p>
                                    <p class='inputDescription'>Provide a link that shows what your creator looks like</p>
                                </div>
                            <input type="text" id='AddImageUrl' placeholder = "ImageUrl" onChange={(e)=>setImageUrl(e.target.value)} value={ImageUrl} required/>

                                <div id="DescriptionHeaderContainer">
                                    <p class="inputHeader">Description</p>
                                    <p class='inputDescription'>Provide a short description about your creator</p>
                                </div>
                            <input type="text" id='AddDescription' placeholder = "Description" onChange={(e)=>setDescription(e.target.value)} value={Description} required/>

                                <div id="YoutubeHeaderContainer">
                                    <p class="inputHeader">Youtube</p>
                                    <p class='inputDescription'>If applicable, provide a youtube link that belongs to your creator</p>
                                </div>
                            <input type="text" id='AddYoutube' placeholder = "Youtube" onChange={(e)=>setYoutube(e.target.value)} value={Youtube} />

                                <div id="TwitterHeaderContainer">
                                    <p class="inputHeader">Twitter</p>
                                    <p class='inputDescription'>If applicable, provide a twitter link that belongs to your creator</p>
                                </div>
                            <input type="text" id='AddTwitter' placeholder = "Twitter" onChange={(e)=>setTwitter(e.target.value)} value={Twitter} />

                                <div id="InstagramHeaderContainer">
                                    <p class="inputHeader">Instagram</p>
                                    <p class='inputDescription'>If applicable, provide a instagram link that belongs to your creator</p>
                                </div>
                            <input type="text" id='AddInstagram' placeholder = "Instagram" onChange={(e)=>setInstagram(e.target.value)} value={Instagram} />
                        </div>

                        <div id="AddCreatorFormButtonContainer">
                            <button id='submit' type='submit'>Submit</button>
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
                margin-top: 70px;
                margin-bottom: 25px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
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
                margin-top: 40px;
            }
            #HomeButton{
                display: flex;
                position: relative;
                width: 300px;
                height: 60px;
                justify-content: center;
                align-items: center;
                background-color: white;
                border-radius: 18px;
                margin-right: 25px;
                margin-top: 45px;
                margin-left: 20px;
                text-decoration: none;
                color: black; 
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



                `}
            </style>
        </div>

    )
}