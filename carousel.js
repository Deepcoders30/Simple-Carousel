const images=[
    "https://plus.unsplash.com/premium_photo-1671580362551-88b878c43555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1454&q=80",
    "https://images.unsplash.com/photo-1670272506154-080063eee4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1672821337870-2180f5223865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    "https://images.unsplash.com/photo-1672829106547-65380c16e9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

];

const n=images.length;
const flexContainer=document.getElementById('flex-container');
const leftButton=document.getElementById('left-btn');
const rightButton=document.getElementById('right-btn');
const carouselNav=document.getElementById('carousel-nav');


const containerWidth=80;
const flexContainerWidth=n*containerWidth;
flexContainer.style.width=flexContainerWidth;

for(let i=0;i<n;i++){
    const newImg=document.createElement('img');
    newImg.src=images[i];
    newImg.classList.add("img-style");
    flexContainer.appendChild(newImg);

    const dotDiv=document.createElement('div');
    dotDiv.classList.add("carousel-dot");
    carouselNav.appendChild(dotDiv);
 
    dotDiv.addEventListener('click', (event)=>{
        const index=[...carouselNav.children].indexOf(event.target);
        showImg(index); 
    });
    

}



let currentPosition=0;
showImg(0);
leftButton.addEventListener("click", ()=>{
    if(currentPosition>0){
        showImg(currentPosition-1);
    }
    else{
        showImg(n-1);
    }
       
    
})

rightButton.addEventListener("click", ()=>{
    if(currentPosition<n-1){
        showImg(currentPosition+1);

    }
    else{
        showImg(0);
    }
        
    
})


function showImg(position){

    const prevDot=carouselNav.children[currentPosition];
    prevDot.classList.remove('active');
    currentPosition=position;

    const curDot=carouselNav.children[currentPosition];
    curDot.classList.add('active');

    const translateXdistance=-currentPosition*containerWidth;
    flexContainer.style.transform=`translateX(${translateXdistance}vw)`;
 }


