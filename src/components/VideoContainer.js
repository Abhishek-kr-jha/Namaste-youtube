import React,{useEffect,useState} from 'react'
import {YOUTUBE_VIDEOS_API} from "../utlis/Constants";
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos]= useState([])
  useEffect(()=>{
    getVideos();


  },[])

  const getVideos= async ()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json?.items);
  }
  if(!videos) return null;
  return (
    <div className="flex flex-wrap">
   {
    videos.map((video)=>(
      <Link to={"/watch?v="+video.id}><VideoCards info={video} key={video.id}/></Link>
    ))
   }
      
     
    </div>
  )
}

export default VideoContainer
