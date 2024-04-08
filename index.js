



var x=document.querySelectorAll(".drum").length;
for (var i=0;i<x;i++){
    // alert("hi ther")
    document.querySelectorAll(".drum")[i].addEventListener('click', handleClick);
}


document.addEventListener("keypress",function(e){
    Keyboradclick(e.key)
})





function Keyboradclick(key){
    // alert("hello there");
    // var audio=new Audio("sounds/tom-3.mp3");
    // audio.play();
    // var Musicbtn=this.innerHTML;
    // alert(Musicbtn);
    switch (key) {
        case 'w':
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'a':
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    
        default:alert("wrong button")
            break;
    }
}


function handleClick(){
    // alert("hello there");
    // var audio=new Audio("sounds/tom-3.mp3");
    // audio.play();
    var Musicbtn=this.innerHTML;
    // alert(Musicbtn);
    switch (Musicbtn) {
        case 'w':
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'a':
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    
        default:alert("wrong button")
            break;
    }
}


