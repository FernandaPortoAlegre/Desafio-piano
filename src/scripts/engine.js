const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    console.log(mapedKeys);

    const clickedKey =
    document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) =>{
 console.log(key.dataset.key);
 key.addEventListener("click",()=> playTune(key.dataset.key));
mapedKeys.push(key.dataset.key)
});

document.addEventListener("keydown" , (e) => {
    
    if(mapedKeys.inxlude(e.key))
    playTune(e.key);
   
});

const handLeVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = () =>{
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handLeVolume);

keysCheck.addEventListener("click", showHideKeys);
