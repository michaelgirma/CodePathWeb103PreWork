import PropTypes from "prop-types"
import {AiOutlineYoutube, AiOutlineInstagram} from 'react-icons/ai';
import {FiTwitter} from 'react-icons/fi';

export default function Creator({creator}){
    const {Name,Description,Youtube,Twitter,Instagram,ImageUrl} = creator

    return(
      <>
        <div id="creator">

            <div id='ImageContainer'>
                <img id='BlurredImage' src={ImageUrl} />
                <img id='Image' src={ImageUrl} />
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
        ImageUrl: PropTypes.string.isRequired,
    }).isRequired
}