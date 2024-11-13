import "./Background.css"
import PropTypes from "prop-types"

import video1 from "../../assets/video1.mp4"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"

const Background = ({heroCount, playStatus}) => {
   if(playStatus){
    return(
        <video className="background fade__in" autoPlay muted loop>
            <source src={video1} type="video/mp4"/>
        </video>
    )
   }else if(heroCount === 0){
    return <img className="background fade__in" src={image1} alt="img1" />
   }else if(heroCount === 1){
    return <img className="background fade__in" src={image2} alt="img2" />
   }else if(heroCount === 2){
    return <img className="background fade__in" src={image3} alt="img3" />
   }
};

Background.propTypes = {
    heroCount: PropTypes.number,
    playStatus: PropTypes.bool
}

export default Background;