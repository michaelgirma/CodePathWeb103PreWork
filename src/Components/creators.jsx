import PropTypes from "prop-types"

export default function Creator({creator}){
    const {Name,Description,Youtube,Twitter,Instagram,ImageUrl} = creator

    return(
        <div id="creator">
            <img src={ImageUrl} alt="" />
            <p>{Name}</p>
            <a href={Youtube}>{Youtube}</a>
        </div>
    )
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