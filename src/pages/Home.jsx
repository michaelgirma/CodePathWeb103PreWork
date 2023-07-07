import{useEffect, useState} from 'react'
import Creator from '../Components/creators'
import supabase from '../client';
import backgroundImage from '../assets/moving-globe.gif';
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
                    <img class="global"  id='HomeBackgroundImage' src={backgroundImage} />
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
                width: 100%;
                height: 100%;
                flex-direction: column;                
            }
            #HomeContainer{
                display: flex;
                position: relative;
                width: 100%;
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
            #CreatorScreenContainer{
                display: flex;
                position: relative;
                width: 99%;
                margin-top: 160px; 
                padding-bottom: 50px;
                padding-top: 50px;
                justify-content: space-evenly;
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
            `}</style>
        </div>
    
    )
}
