let boxes=document.getElementsByClassName('box');
var res=document.getElementById('result');
var score=res.children[0];
var show=score.children[0];
const otext="O";
const xtext="X";
let currentplayer=xtext;
let spaces=Array(9).fill(null);
var c=0,k=0;
const audio=new Audio("touchaudio.mpeg");
const audio1=new Audio("winning.mp3");
const audio2=new Audio("drawn audio.wav");
const audio3=new Audio("buzzer.mp3");

function boxClick(id)
{
    if(k==1)
      alert("MATCH ENDED")
    
    audio.playbackRate=1;
    audio.play();

    //const id=.id;
    var x=document.getElementById(id);
    var yturn=document.getElementById("Yturn");
    var xturn=document.getElementById("Xturn");
   

    if(currentplayer=='X')
    {
        
        yturn.style.backgroundColor="#56baed";
        yturn.style.color="#FFF";
        xturn.style.backgroundColor="#fff";
        xturn.style.color="#56baed";
        
    }
    else
    {
        xturn.style.backgroundColor="#56baed";
        xturn.style.color="#FFF";
        yturn.style.backgroundColor="#fff";
        yturn.style.color="#56baed";

    }
    

    if(!spaces[id])
    {
        c++;
        spaces[id]=currentplayer;
        x.innerHTML=currentplayer;
        x.style.backgroundColor="#56baed";
        x.style.color="#fff";
        let trans=playerWon();
        console.log(trans);


        if(playerWon()!=false)
        {
            audio1.play();
            audio.playbackRate=1;

          for(var i=0;i<trans.length;i++)
          {
              var t=document.getElementById(trans[i]);
              t.style.backgroundColor="green";
              t.style.transform="scale(1.2)";
          }
            
           k=1;
            
            res.style.display="inline-block";
            
            show.innerHTML=
            `
              CONGRATULATIONS! ${currentplayer}  WON THE GAME 
              <img src="download.png">
              <img src="download.png">
            
            `
            

           
            
        }
        else if(c==9)
        {
            audio2.play();
            res.style.display="inline-block";
            
            show.innerHTML=
            `
               OH  ! MATCH HAS DRAWN
              <img src="handshake.png">
            
            `
        }
     
        currentplayer=currentplayer==xtext?otext:xtext;
    }
    else
    {
        audio3.play();
         alert("This box is already filled");
    }

    
    
}

const winCombos=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]


function playerWon()
{
    for(const cond of winCombos)
    {
      let [a,b,c]=cond
      if(spaces[a] && (spaces[a]==spaces[b] && spaces[a]==spaces[c]))
      {
          return [a,b,c]
      }
    }

    return false;
    

}

function newgame()
{
    spaces.fill(null);
    c=0,k=0;
    res.style.display="none";
    for(var i=0;i<boxes.length;i++)
    {
        boxes[i].innerHTML="";
        boxes[i].style.backgroundColor="#FFF";
        boxes[i].style.transform="scale(1)";
    }
   audio1.pause();
   audio1.currentTime=0;

    currentplayer=xtext;

}



