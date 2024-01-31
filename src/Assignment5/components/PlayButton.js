import './PlayButton.css';

function PlayButton({message,children,onPlay,onPause,smashMSG,onSmash}){
    let playing = false;
    function handleClick(e){
        console.log(e)
        e.stopPropagation()

        if(playing) onPause()
        else onPlay();

        playing = !playing;
    }

    return (
        // <button onClick={handleClick}>{children} : {playing?'>':'||'}</button>
        <button onClick={()=>onSmash(smashMSG)}>{children} : {playing?'>':'||'}</button>
    )

}

export default PlayButton;