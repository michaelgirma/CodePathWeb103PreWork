import PropTypes from "prop-types"
import {AiOutlineYoutube, AiOutlineInstagram} from 'react-icons/ai';
import {FiTwitter} from 'react-icons/fi';

export default function Creator({creator}){
    const {Name,Description,Youtube,Twitter,Instagram,imageURL} = creator

    return(
      <>
        <div id="creator">

            <div id='ImageContainer'>
                <img id='BlurredImage' src={imageURL} />
                <img id='Image' src={imageURL} />
            </div>

            <div id="TextContainer">
                <div id="NameContainer">
                    <p>{Name}</p>
                </div>

                <div id="DescriptionContainer">
                    <p>{Description}</p>
                </div>

                <div id="SocialMediaContainer">
                    <p id='Youtube'><AiOutlineYoutube id='YoutubeIcon'/> Youtube: <a href={Youtube} id='link'>{Youtube}</a></p>
                    <p id='Twitter'><FiTwitter id='TwitterIcon'/> Twitter: <a href={Twitter} id='link'>{Twitter}</a></p>
                    <p id='Instagram'><AiOutlineInstagram id='InstagramIcon'/> Instagram: <a href={Instagram} id='link'>{Instagram}</a></p>
                </div>  
            </div>
        </div>

        <style>{`
            #creator{
                display: flex;
                position: relative;
                width: 650px;
                height: 350px;
                margin-top: 3%;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                background-color: black;
                border-radius: 10px;
                border: 1px solid white;
            }
        
            #ImageContainer{
                display: flex;
                position: relative;
                flex-direction: row;
                width: 35%;
                height: 100%;
                overflow: hidden;
                border-radius: 5px;
            }

            #BlurredImage{
                display: flex;
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 5px;
                filter: blur(5px);  
                object-fit: cover;
                scale: 1.8;
                background-position: center;
            }

            #Image{
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                object-fit: contain;
            }

            #TextContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 62%;
                height: 100%;
                padding-right: 5px;
                overflow-y: scroll;
                
            }

            #NameContainer{
                display: flex;
                position: relative;
                width: 100%;
                justify-content: center;
                align-items: center;
                font-family: 'InterBold';
                font-size: 17px;
                margin-bottom: 0px;
                padding-bottom: 0px;                
            }

            #DescriptionContainer{
                display: flex;
                position: relative;
                width: 100%;
                justify-content: center;
                align-items: center;
                font-family: 'InterSemi';
                font-size: 14px;
                margin-top: 0px;
                padding-top: 0px;
            }
            #SocialMediaContainer{
                display: flex;
                position: relative;
                width: 100%;
                flex-direction: column;
                padding-left: 5px;
                overflow-wrap: break-word;
            }
            #link{
                color: red;
            }

            @media (max-width: 700px){
                #creator{
                    width: 480px;
                }
            }
        `}</style>
    </>)
}


Creator.propTypes = {
    creator: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Youtube: PropTypes.string.isRequired,
        Twitter: PropTypes.string.isRequired,
        Instagram: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
    }).isRequired
}