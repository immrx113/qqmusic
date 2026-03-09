let index=0;

const slider=document.querySelector('.recommend-slider');
const leftBtn=document.querySelector('.arrow-left');
const rightBtn=document.querySelector('.arrow-right');

const moveWidth=1200
const maxIndex=4

rightBtn.onclick=function(){
    if(index<maxIndex){
        index++;
        slider.style.transform=`translateX(${-moveWidth*index}px)`;
    }
    else if(index===maxIndex){
        index=0;
        slider.style.transform=`translateX(0px)`;
    }
}
leftBtn.onclick=function(){
    if(index>0){

        index--;
        slider.style.transform=`translateX(${moveWidth*(-index)}px)`;
    }
    else if(index===0){
        index=maxIndex;
        slider.style.transform=`translateX(${-moveWidth*index}px)`;
    }
}