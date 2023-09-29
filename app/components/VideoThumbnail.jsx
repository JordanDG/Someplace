import Image from "next/image";

export default function VideoThumbnail({video_title, video_author, video_author_thumburl, video_views, video_published, video_thumburl, video_duration}) {
  return (
    <div className="Video_Item">
        <Image 
        src={video_thumburl}
        alt={video_title}
        width={350}
        height={350}
        quality={100}
        loading="eager"
        className="Video_Thumbnail"
        />
        <div className="Video_Details">
            <Image 
            src={video_author_thumburl}
            alt={video_title}
            width={40}
            height={40}
            quality={100}
            loading="eager"
            className="Video_Author_Thumb"
            />
            <div className="Video_Details_Main">
                <h1>{video_title}</h1>
                <p>{video_author}</p>
                <p>{video_views} | {video_published}</p>
            </div>
        </div>
        <div className="Duration_Container">
            <p className="Video_Duration">{video_duration}</p>
        </div>
    </div>
  )
}