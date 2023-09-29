// Components //
import VideoThumbnail from "./VideoThumbnail";

async function getVideoData() {
    const response = await fetch('http://localhost:4000/videos', {
        next: {
            revalidate: 0
        }
    });

    return response.json();
}

export default async function VideoContainer() {
    const videos = await getVideoData();

    return (
        <div className="Video_Container">
            {videos.map((video) => (
                <VideoThumbnail key={video.id} video_thumburl={video.thumburl} video_title={video.title.length > 40 ? video.title.slice(0, 40) + "..." : video.title} video_author={video.author} video_views={video.views} video_published={video.published} video_author_thumburl={video.video_author_url} video_duration={video.video_duration} />
            ))}
        </div>
    )
}