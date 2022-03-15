const content = document.querySelector(".content");

content.innerHTML = content.textContent.replace(/\S/g,"<span>$&</span>");

anime.timeline({
  loop:true
})
.add({
  targets:".content span",
  color:"#e8ad0c",
  translateY:[-500,0],
  scale:[35,1],
  opacity:[0,1],
  easing:"easeOutExpo",
  duration:2500,
  delay:anime.stagger(65) 
})
.add({
  targets:".content span",
  color:"#09e0d2",
  rotate:720,
  opacity:[1,0],
  easing:"easeOutExpo",
  duration:2500,
  delay:anime.stagger(100)
})
.add({
  targets:".content span",
  translateY:[-500,0],
  opacity:[0,1],
  easing:"easeOutExpo",
  duration:2500,
  delay:anime.stagger(100)
})
.add({
  targets:".content span",
  translateY:[0,1000],
  opacity:[1,0],
  easing:"easeOutExpo",
  duration:2500,
  delay:anime.stagger(100)
})