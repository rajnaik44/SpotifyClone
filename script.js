
//Initilizing the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gifOPacity');
let songItems = Array.from(document.getElementsByClassName('songItem')); 


let songs =[
    {songName: "sale,-e-Ishq", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "wake me up", filePath:"songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "breathless", filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "judaiyaa", filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "hum toh deewane", filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "gym motivation", filePath:"songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "bodyguard", filePath:"songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "nothing", filePath:"songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "emptyness", filePath:"songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "empty", filePath:"songs/10.mp3", coverPath: "covers/10.jpg"},
    
]

//dislpaying all songs there
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


})// call back function 


//Handle play/pause click
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime <=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');//play icon
        masterPlay.classList.add('fa-circle-pause');//pause icon
        gif.style.opacity =1;//changing the opacity of my gif
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');//pause icon
        masterPlay.classList.add('fa-circle-play');//play icon
        gif.style.opacity = 0;//stopped the opacicity of gif
    
    }
})

//listern to events
audioElement.addEventListener('timeupdate', ()=>{
    
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);//parseInt converts the audio into intervalue

    myProgressBar.value = progress;//showing the progress on the bar
    
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100; //currrent time=(percentage x duration)/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        
        makeAllPlays();
        songIndexindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'songs/${songIndex+1}.mp3';////index bugggg
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})