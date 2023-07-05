import{useEffect, useState} from 'react'
import Creator from '../Components/creators'
import supabase from '../client';

export default function Home(){


    const [recentCreators, setRecentCreators] = useState([])

    useEffect(()=>{
        async function getCreator(){
            try{
                const{data,error} = await supabase.from("creators").select([{id,name,youtube,twitter,instagram,description,imageUrl}]).order("id",{ascending:false}).limit(2)
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
                <div id="HeaderContainer">
                    <h1 id="Header">CreatorVerse</h1>
                </div>
                <div id="NavbarContainer">
                    <a id='ShowButton' href='/ShowCreators'>View All Creators</a>
                    <a id='AddButton' href='/AddCreator'>Add A Creator</a>
                </div>
            </div>
            {recentCreators.map((creator)=>(
                <div key={creator.id}>
                    <Creator creator={creator}/>
                    <div id='buttonContainer'>
                       <button href='/EditCreator/${creator.id}'></button>
                       <button href='/ViewCreator/${creator.id}'></button>
                    </div>
                    
                </div>
            )
            
            )}
            
            <style>{`
            #Home{
                display:flex;
                position: relative;
                width: 100%;
                height: 75vh;
                flex-direction: column;
                border: 1px solid blue;
                
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
            #HeaderContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 45%;
                justify-content: center;
                align-items: center;
                border: 1px solid green;
            }
            #Header{
                display: flex;
                position: relative;
                font-size: 100px;
            }
            #NavbarContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 35%;
                justify-content: center;
                align-items: center;
                border: 1px solid red;
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
            
            
            
            `}</style>
        </div>
    
    )
}
