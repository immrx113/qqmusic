let recommend_index=0;
let newsong_index=0;

const recommend_slider=document.querySelector('.recommend-slider');
const recommend_leftBtn=document.querySelector('.arrow-left');
const recommend_rightBtn=document.querySelector('.arrow-right');
const recommend_nulls=document.querySelectorAll('.content-recommend-bottom-null');
const newsong_slider=document.querySelector('.newsong-slider');
const newsong_leftBtn=document.querySelector('.newsong-arrow-left');
const newsong_rightBtn=document.querySelector('.newsong-arrow-right');
const newsong_nulls=document.querySelectorAll('.null');

const moveWidth=1200
const recommend_maxIndex=4
const newsong_maxIndex=5

function updateNulls(){
    recommend_nulls.forEach(function(dot){
        dot.classList.remove('null-active');
    })
    recommend_nulls[recommend_index].classList.add('null-active');
}
function updateNewsongNulls(){
    newsong_nulls.forEach(function(dot){
        dot.classList.remove('null-active');
    })
    newsong_nulls[newsong_index].classList.add('null-active');
}

recommend_rightBtn.onclick=function(){
    if(recommend_index<recommend_maxIndex){
        recommend_index++;
        recommend_slider.style.transform=`translateX(${-moveWidth*recommend_index}px)`;
    }
    else if(recommend_index===recommend_maxIndex){
        recommend_index=0;
        recommend_slider.style.transform=`translateX(0px)`;
    }
    updateNulls();
}

newsong_rightBtn.onclick=function(){
    if(newsong_index<newsong_maxIndex){
        newsong_index++;
        newsong_slider.style.transform=`translateX(${-moveWidth*newsong_index}px)`;
    }
    else if(newsong_index===newsong_maxIndex){
        newsong_index=0;
        newsong_slider.style.transform=`translateX(0px)`;
    }
    updateNewsongNulls();
}

recommend_leftBtn.onclick=function(){
    if(recommend_index>0){

        recommend_index--;
        recommend_slider.style.transform=`translateX(${moveWidth*(-recommend_index)}px)`;
    }
    else if(recommend_index===0){
        recommend_index=maxIndex;
        recommend_slider.style.transform=`translateX(${-moveWidth*recommend_index}px)`;
    }
    updateNulls();
}
newsong_leftBtn.onclick=function(){
    if(newsong_index>0){
        newsong_index--;
        newsong_slider.style.transform=`translateX(${moveWidth*(-newsong_index)}px)`;
    }
    else if(newsong_index===0){
        newsong_index=newsong_maxIndex;
        newsong_slider.style.transform=`translateX(${-moveWidth*newsong_index}px)`;
    }
    updateNewsongNulls();
}

recommend_nulls.forEach(function(dot,i){
    dot.onclick=function(){
        recommend_index=i;
        recommend_slider.style.transform=`translateX(${-moveWidth*recommend_index}px)`;
        updateNulls();
    }
})
newsong_nulls.forEach(function(dot,i){
    dot.onclick=function(){
        newsong_index=i;
        newsong_slider.style.transform=`translateX(${-moveWidth*newsong_index}px)`;
        updateNewsongNulls();
    }
})
