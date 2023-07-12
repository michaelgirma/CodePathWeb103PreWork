import{useEffect, useState} from 'react'
import Creator from '../Components/creators'
import supabase from '../client';
import { Link } from 'react-router-dom';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export default function Home(){


    const [recentCreators, setRecentCreators] = useState([])
    

    useEffect(()=>{
        async function getCreator(){
            try{
                const{data,error} = await supabase.from("Creators").select('id,Name,Youtube,Twitter,Instagram,Description,imageURL').order('id',{ascending:false}).limit(2)
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
    },[])

    return(
        <div id='Home'>
            <div id="HomeContainer">
                <div id="HomeBackgroundContainer">
                    <img id='HomeBackgroundImage' src="https://i.imgur.com/F4ztSGV.gif?noredirect"/>
                    <div id="HeaderContainer">
                        <h1 id="Header">CreatorVerse</h1>
                    </div>
                    <div id="NavbarContainer">
                        <Link id='ShowButton' to='/ShowCreators'>View All Creators</Link>
                        <Link id='AddButton' to='/AddCreator'>Add A Creator</Link>
                    </div>
                </div>

                <div id="CreatorScreenContainer">
                    {recentCreators.map((creator)=>(
                        <div key={creator.id}>
                            <Creator creator={creator}/>
                            <div id='buttonContainer'>
                                <Link to={`/ViewCreator/${creator.id}`}>
                                    <button id='ViewCreatorButton'><AiOutlineInfoCircle/></button>
                                </Link>
                                <Link to={`/EditCreator/${creator.id}`}>
                                    <button id='EditHomeButton'><HiOutlinePencilAlt/></button>
                                </Link>

                            </div>
                            
                        </div>
                    )
                    
                    )}
                </div>
            </div>
            
            <style>{`
            #Home{
                display:flex;
                position: relative;
                width: 100vw;
                height: 100%;
                flex-direction: column;                
            }
            #HomeContainer{
                display: flex;
                position: relative;
                width: 99%;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            #HomeBackgroundContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-top: 60px;
              }
              #HomeBackgroundImage {
                display: flex;
                position: absolute;
                width: 90%;
                height: 500px;
                object-fit: cover;
                overflow: hidden;
                padding-top: 40px;
                margin-top: 40px;
              }
            #HeaderContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 45%;
                justify-content: center;
                align-items: center;
            }
            #Header{
                display: flex;
                position: relative;
                font-size: 100px;
                font-family: 'InterBold';
            }
            #NavbarContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 35%;
                justify-content: center;
                align-items: center;
            }
            #ShowButton{
                display: flex;
                position: relative;
                width: 300px;
                height: 60px;
                justify-content: center;
                align-items: center;
                background-color: white;
                border-radius: 18px;
                margin-right: 25px;
                text-decoration: none;
                color: black;
            }
            #AddButton{
                display: flex;
                position: relative;
                width: 300px;
                height: 60px;
                justify-content: center;
                align-items: center;
                background-color: white;
                border-radius: 18px;
                margin-left: 25px;
                text-decoration: none;
                color: black;
            }
            #ShowButton:hover {
                opacity: 0.9;
                transform: scale(1.1);
                transition: transform 0.2s ease-in-out;
            }
            #AddButton:hover {
                opacity: 0.9;
                transform: scale(1.1);
                transition: transform 0.2s ease-in-out;
            }
            #EditHomeButton{
                display: flex;
                position: relative;
                font-size: 2rem;
                background-color: transparent;
                color: white;
                border: none;
                cursor: pointer;
            }
            #ViewCreatorButton{
                display: flex;
                position: relative;
                font-size: 2rem;
                background-color: transparent;
                color: white;
                border: none;
                cursor: pointer; 
            }
            #ViewCreatorButton:hover {
                opacity: 0.9;
                transform: scale(1.1);
                transition: transform 0.2s ease-in-out;
            }
            #EditHomeButton:hover {
                opacity: 0.9;
                transform: scale(1.1);
                transition: transform 0.2s ease-in-out;
            }
            #CreatorScreenContainer{
                display: flex;
                position: relative;
                width: 100%;
                margin-top: 160px; 
                padding-bottom: 50px;
                padding-top: 50px;
                gap: 15px;
                justify-content: center;
                align-items: center;
                flex-direction: row;
            }
            #buttonContainer{
                display: flex;
                position: relative;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                padding-right: 20px;
            }

            @media (max-width: 1300px){
                
                #HeaderContainer{
                    width: 98%;
                }
                #Header{
                    font-size: 50px;
                    font-family: 'InterBold';
                }
                #NavbarContainer{
                    margin-top: 80px;
                }
                #CreatorScreenContainer{
                    flex-direction: column;
                    height: 600px;
                }
                #ShowButton{
                    width: 150px;
                    margin-right: 5px;
                }
                #AddButton{
                    width: 150px;
                    margin-left: 5px;
                }
            }
            `}</style>
        </div>
    
    )
}
