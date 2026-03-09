let index=0;

const slider=document.querySelector('.recommend-slider');
const leftBtn=document.querySelector('.arrow-left');
const rightBtn=document.querySelector('.arrow-right');
const nulls=document.querySelectorAll('.content-recommend-bottom-null');

const moveWidth=1200
const maxIndex=4

function updateNulls(){
    nulls.forEach(function(dot){
        dot.classList.remove('null-active');
    })
    nulls[index].classList.add('null-active');
}

rightBtn.onclick=function(){
    if(index<maxIndex){
        index++;
        slider.style.transform=`translateX(${-moveWidth*index}px)`;
    }
    else if(index===maxIndex){
        index=0;
        slider.style.transform=`translateX(0px)`;
    }
    updateNulls();
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
    updateNulls();
}

nulls.forEach(function(dot,i){
    dot.onclick=function(){
        index=i;
        slider.style.transform=`translateX(${-moveWidth*index}px)`;
        updateNulls();
    }
})
