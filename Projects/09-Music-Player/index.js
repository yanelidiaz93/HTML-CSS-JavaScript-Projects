const btnNext = document.getElementById("next") 
const btnPlay = document.getElementById("play")
const btnPrev = document.getElementById("prev")
const titleEle = document.getElementById("title") 
const artistEle = document.getElementById("artist") 
const imgPlay = document.querySelector("#play img")
const progressEle = document.getElementById("progress")
const volumeEle = document.getElementById("volume")
const iconVolume = document.querySelector(".vo-icon img")
const imgAlbum = document.querySelector(".imagen")

let i = 0;
let playing = 0
const songs = [
    { title: "Magic Shop", artist: "BTS", cover: "img/album/album1.png" },
    { title: "Mikrokosmos", artist: "BTS", cover: "img/album/album2.png" },
    { title: "Answer: Love Myself", artist: "BTS", cover: "img/album/album3.png" },
    { title: "they don't know 'bout us", artist: "BTS", cover: "img/album/album4.png" },
    { title: "Amigdala", artist: "Agust D", cover: "img/album/album5.png" }
];


let currentSong = new Audio(`songs/song${i + 1}.MP3`)

function loadDefaultSong() {
    titleEle.innerText = songs[i].title
    artistEle.innerText = songs[i].artist
    imgAlbum.style.backgroundImage = `url("${songs[i].cover}")`
}

loadDefaultSong()

btnPlay.addEventListener("click", () => {
    if(currentSong.paused){
        imgPlay.src = "img/pause.png"
        currentSong.play()
        playing++
    }else{
        imgPlay.src = "img/play-button-arrowhead.png"
        currentSong.pause()
        playing--
    }
    
})

btnNext.addEventListener("click", () =>{
    nextSong()
})

btnPrev.addEventListener("click", () => {
    prevSong()
})

currentSong.addEventListener("loadedmetadata", () =>{
    progressEle.max = currentSong.duration
})

currentSong.addEventListener("timeupdate", () => {
    progressEle.value = currentSong.currentTime
})

progressEle.addEventListener("input", () =>{
    currentSong.currentTime = progressEle.value
})

volumeEle.addEventListener("input", (e) => {
    const currentVol = parseFloat(e.target.value)
    currentSong.volume = currentVol

    if(currentVol === 0) {
        iconVolume.src = "img/silenciar-volumen.png";
    } else {
        iconVolume.src = "img/volume-up.png";
    }
})

function nextSong(){ 
    currentSong.pause()
    i++
    imgPlay.src = "img/pause.png"

    if(i >= songs.length){
        i = 0
    }
        
    currentSong.src = `songs/song${i + 1}.MP3`
    currentSong.play();
    titleEle.innerText = songs[i].title
    artistEle.innerText = songs[i].artist
    imgAlbum.style.backgroundImage = `url("${songs[i].cover}")`

    console.log(i)
}

function prevSong (){
    currentSong.pause()
    i--

    if(i < 0){
        i = songs.length - 1
    }
        
    imgPlay.src = "img/pause.png"
    currentSong.src = `songs/song${i + 1}.MP3`
    currentSong.play();
    titleEle.innerText = songs[i].title
    artistEle.innerText = songs[i].artist
    imgAlbum.style.backgroundImage = `url("${songs[i].cover}")`

    console.log(i)
}