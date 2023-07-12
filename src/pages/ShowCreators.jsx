import{useEffect, useState} from 'react'
import supabase from '../client'
import Creator from '../Components/creators';
import { Link } from 'react-router-dom';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';




export default function ShowCreator(){
 
    const [allCreators, setAllCreators] = useState([])

    useEffect(()=>{
        async function getCreator(){
            try{
                const{data,error} = await supabase.from("Creators").select('id,Name,Youtube,Twitter,Instagram,Description,imageURL').order("id",{ascending: true})
                if(error){
                    console.log(error)
                }
                else{
                    setAllCreators(data)
                }
            }
            catch(error){
                console.log(error)
            }
        }
        getCreator()
    },[])

    return(
        <div id='ShowCreator'>
            <div id="ShowCreatorContainer">
                <div id='ShowBackgroundContainer'>
                        <img id='ShowCreatorBackgroundImage' src="https://i.imgur.com/F4ztSGV.gif?noredirect" />
                    
                    <div id="ShowContainerHeader">
                        <h1 id="ShowHeader">All Creators</h1>
                    </div>

                    <div id="ShowHomeButtonContainer">
                        <Link to='/'>
                            <button id='ShowHomeButton'><AiOutlineHome/></button>
                        </Link>
                    </div>
                </div>
                <div id="CreatorMapContainer">
                    {allCreators.map((creator)=>(
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
                #ShowCreator{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                }
                #ShowCreatorContainer{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                }
                #ShowBackgroundContainer{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 500px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #ShowCreatorBackgroundImage{
                    display: flex;
                    position: absolute;
                    width: 95%;
                    height: 500px;
                    object-fit: cover;
                    overflow: hidden;
                }
                #ShowContainerHeader{
                    display: flex;
                    position: relative;
                    width: 85%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }
                #ShowHeader{
                    display: flex;
                    position: relative;
                    font-size: 100px;
                    font-family: 'InterBold';
                }
                #ShowHomeButtonContainer{
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 15%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #ShowHomeButton{
                    display: flex;
                    position: relative;
                    font-size: 2rem;
                    background-color: transparent;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                #CreatorMapContainer{
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    justify: content: center;
                    align-items: center;
                    overflow-y: auto; 
                    max-height: 500px;
                }
                #buttonContainer{
                    display: flex;
                    position: relative;
                    flex-direction: row;
                    justify-content: space-evenly;
                    align-items: center;
                    padding-right: 20px;
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

                @media (max-width: 700px){    
                    #ShowHeader{
                        font-size: 70px;
                    }
                }
            `}</style>
        </div>
    )
}