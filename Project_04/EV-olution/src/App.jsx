import { useEffect, useState } from "react";
import "./App.css"
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  const heroData = [
    {text1:"Dive into", text2:"what you love"},
    {text1:"Indulge", text2:"your passion"},
    {text1:"Give in to", text2:"your passion"}
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  useEffect(()=>{
    setInterval(()=>{
      setHeroCount(count =>  count === 2?0:count+1)
    },4000)
  },[])
  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus}/>
      <Navbar/>
      <Hero playStatus={playStatus} setPlayStatus={setPlayStatus} heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} />
    </div>
  );
};

export default App;