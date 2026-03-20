let cards=document.querySelectorAll(".card");
let lightbox=document.getElementById("lightbox");
let lightboxImg=document.getElementById("lightbox-img");
let title=document.getElementById("img-title");
let desc=document.getElementById("img-desc");
let currentIndex=0;

function openLightbox(img){
  lightbox.style.display="flex";
  lightboxImg.src=img.src;

  let parent=img.parentElement;
  title.innerText=parent.dataset.title;
  desc.innerText=parent.dataset.desc;

  let imgs=document.querySelectorAll(".card img");
  imgs.forEach((image,index)=>{
    if(image.src===img.src){currentIndex=index;}
  });
}

function closeLightbox(){lightbox.style.display="none";}

function changeImage(step){
  let imgs=document.querySelectorAll(".card img");
  currentIndex+=step;
  if(currentIndex<0)currentIndex=imgs.length-1;
  if(currentIndex>=imgs.length)currentIndex=0;

  let currentImg=imgs[currentIndex];
  lightboxImg.src=currentImg.src;

  let parent=currentImg.parentElement;
  title.innerText=parent.dataset.title;
  desc.innerText=parent.dataset.desc;
}

function filterImages(category){
  cards.forEach(card=>{
    if(category==='all'||card.classList.contains(category)){
      card.style.display='block';
    }else{
      card.style.display='none';
    }
  });
}

let buttons=document.querySelectorAll(".buttons button");
buttons.forEach(btn=>{
  btn.addEventListener("click",function(){
    buttons.forEach(b=>b.classList.remove("active"));
    this.classList.add("active");
  });
});

function searchImages(text){
  text=text.toLowerCase();
  cards.forEach(card=>{
    let content=card.innerText.toLowerCase();
    if(content.includes(text)){
      card.style.display='block';
    }else{
      card.style.display='none';
    }
  });
}

function toggleMode(){
  document.body.classList.toggle("light-mode");
}

