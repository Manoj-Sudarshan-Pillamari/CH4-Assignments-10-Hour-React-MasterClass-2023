import PlayButton from './components/PlayButton';
import '../App.css'
import Video from './components/Video';
import videos from './data/data';
function Main() {
  const handleSmash = (dt) => {
    alert(dt)
  }

  return (
    <div className="Assign5" onClick={()=>console.log('App')}>
      <h1 style={{textAlign:"center", color:"white"}}>Assignment5</h1>
      <div>Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
          onSmash={handleSmash}
          smashMSG="Clicked"
            // onPlay={() => console.log('Playing..',video.title)}
            // onPause={() => console.log('Paused..',video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}

      <div style={{ clear: 'both' }}>
        {/* <PlayButton message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}

        {/* <PlayButton message="pause-msg" onSmash={()=>alert('Playyy')}>Pause</PlayButton> */}
      </div>
    </div>
  );
}

export default Main;
