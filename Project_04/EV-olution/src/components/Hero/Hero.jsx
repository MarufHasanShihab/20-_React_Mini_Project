import "./Hero.css"
import PropTypes from "prop-types"
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png"
import pause_icon from "../../assets/pause_icon.png"

const Hero = ({heroData, heroCount, setHeroCount, playStatus, setPlayStatus}) => {
    return (
        <div className="hero">
            <div className="hero__text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero__explore">
                <p>Explore the features</p>
                <img src={arrow_btn} alt="arrow_btn" />
            </div>
            <div className="hero__dots-play">
               <ul className="hero__dots">
               <li onClick={()=>setHeroCount(0)} className={`${heroCount===0?"hero__dot orange":"hero__dot"}`}></li>
               <li onClick={()=>setHeroCount(1)} className={`${heroCount===1?"hero__dot orange":"hero__dot"}`}></li>
               <li onClick={()=>setHeroCount(2)} className={`${heroCount===2?"hero__dot orange":"hero__dot"}`}></li>
               </ul>
            <div className="hero__play">
                <img onClick={()=>setPlayStatus(prev=>!prev)} src={playStatus?pause_icon:play_icon} alt="play_icon" />
                <p>see the video</p>
            </div>
            </div>
        </div>
    );
};

Hero.propTypes = {
    heroData: PropTypes.object,
    heroCount: PropTypes.number,
    setHeroCount: PropTypes.func,
    playStatus: PropTypes.bool,
    setPlayStatus: PropTypes.func
}

export default Hero;