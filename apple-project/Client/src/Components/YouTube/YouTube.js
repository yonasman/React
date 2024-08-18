import { useEffect, useState } from "react";
import style from "./YouTube.module.css"
import axios from "axios"

function YouTube(){
    const [videos, setVideos] = useState([]);
    const api_key = process.env.REACT_APP_API_KEY
    // useEffect(() => {
    //     fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=date&key=${api_key}`).then((response) => response.json()).then((data)=>setVideos(data.items)).catch((err)=> {
    //         console.log(err);
    //     })
    // },[])
    // console.log(videos[0]);
    // using axios
    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=date&key=${api_key}`).then((res) => {
            setVideos(res.data.items);
            // console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    },[api_key])
        return (
            <>
                <h1 className={style.title}>Latest Videos</h1>
                <div className={style.wrapper}>
                    {
                        videos.map((singleVideo, i) => {
                                const videoId = singleVideo.id.videoId
                                const videoLink = `https://www.youtube.com/watch?v=l7olVvk3HcY${videoId}`
                                return (
                                    <div key={i} className={style.videoWrapper}>
                                        <a href={videoLink}>
                                            <img src={singleVideo.snippet.thumbnails.high.url} alt="video thumbnail"/>
                                        </a>
                                        <p className={style.imgTitle}>{singleVideo.snippet.title}</p>
                                        <p>{singleVideo.snippet.description}</p>
                                    </div>
                                )
                        })
                    }
                </div>
            </>
        )

}
export default YouTube