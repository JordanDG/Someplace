import ScrollContainer from "./components/ScrollContainer";
import VideoThumbnail from "./components/VideoThumbnail";
import VideoContainer from "./components/VideoContainer";

export default function Home() {
  return (
    <main>
      <div className="Main_Container">
        <h1 className="Title_Left bg-[url('./assets/marbled.jpg')]">SOMEPLACE</h1>
        <p className="Text_Left [word-spacing:5px]">This is where the main explanation text will go as soon as I know what it is going to say! This is where the main explanation text will go as soon as I know what it is going to say! This is where the main explanation text will go as soon as I know what it is going to say! This is where the main explanation text will go as soon as I know what it is going to say!</p>
        <button className="Button_Left">Get Started</button>
      </div>
      <ScrollContainer />
      <VideoContainer />
    </main>
  )
}
