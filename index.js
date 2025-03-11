document.querySelectorAll(".menu a").forEach((a) => {
  a.addEventListener('click', () => {
    document.querySelector("#" + a.title).scrollIntoView({
      behavior: "smooth", block: a.title !="project" ? "center": "start"
    });
  });
});


// document.getElementById().

document.querySelectorAll('#project ul li').forEach((project, index) => {
  project.addEventListener('click', () => {
    document.querySelectorAll('.project').forEach((project) => {
      project.classList.add('hidden');
    });

    document.querySelectorAll('#project ul li').forEach((project) => {
      project.classList.remove('active')
    });

    project.classList.add('active');

    if (index == 0) {
      document.querySelectorAll('.project.app').forEach((project) => {
        project.classList.remove('hidden');
      });
    } else {
      document.querySelectorAll('.project.graphic').forEach((project) => {
        project.classList.remove('hidden');
      });
    }
  })
});


document.querySelectorAll('.project.graphic img').forEach((image, index) => {
  image.addEventListener('mouseenter', (ig) => {
    image.style.filter = 'blur(0em)';
    document.querySelectorAll('.project.graphic img').forEach((img,i)=>{
      if(i != index){
        img.style.filter = 'blur(0.2em) brightness(40%)';
      }
    });
  });
  image.addEventListener('mouseleave', (ig) => {
    image.style.filter = 'blur(0.2em)';
    document.querySelectorAll('.project.graphic img').forEach((img,i)=>{
        img.style.filter = 'blur(0em) brightness(100%)';
    });
  });
})