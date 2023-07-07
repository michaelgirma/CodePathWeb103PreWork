import{useEffect, useState} from 'react'
import supabase from '../client'
import Creator from '../Components/creators';
import backgroundImage from '../assets/moving-globe.gif';





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
                        <img id='ShowCreatorBackgroundImage' src={backgroundImage} />
                    
                    <div id="ShowContainerHeader">
                        <h1 id="ShowHeader">All Creators</h1>
                    </div>

                    <div id="ShowHomeButtonContainer">
                        <a id='ShowHomeButton' href='/'>Home</a>
                    </div>
                </div>
            </div>
            {allCreators.map((creator)=>(
                <div key={creator.id}>
                    <Creator creator={creator}/>
                    <div id='buttonContainer'>
                       <button href='EditCreator/${creator.id}'></button>
                       <button href='ViewCreator/${creator.id}'></button>
                    </div>
                    
                </div>
            )
            
            )}
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
                    width: 250px;
                    height: 30px;
                    justify-content: center;
                    align-items: center;
                    background-color: white;
                    border-radius: 18px;
                    text-decoration: none;
                    color: black;
                }

            `}</style>
        </div>
    )
}