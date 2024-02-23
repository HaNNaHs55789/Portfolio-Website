document.getElementById("menu").addEventListener("click", function() {
    document.getElementById("nav").classList.toggle("open")
    document.getElementById("menu").classList.toggle("hide")
    document.getElementById("menu-close").classList.toggle("open")
  })

  document.getElementById("menu-close").addEventListener("click", function() {
    document.getElementById("nav").classList.toggle("open")
    document.getElementById("menu").classList.toggle("hide")
    document.getElementById("menu-close").classList.toggle("open")
  })

  const slider = document.querySelector('.slider');

  const leftArrow = document.querySelector('.left');
  const rightArrow = document.querySelector('.right');


  var sectionIndex = 0;


  leftArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex > 0 ) ? sectionIndex - 1 : 0;
     slider.style.transform = 'translate(' + (sectionIndex) * -25 +'%)';
  });

  rightArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex < 3 ) ? sectionIndex + 1 : 3;
     slider.style.transform = 'translate(' + (sectionIndex) * -25 +'%)';
  });