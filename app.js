//step 1: get DOM

let previousIndex = 0;

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
let thumbnailBorderDom = document.querySelector('.thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

// SliderDom.prepend(SliderItemsDom[1])
// thumbnailBorderDom.prepend(thumbnailItemsDom[1]);

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

document.querySelectorAll('.thumbnail .item').forEach((item, index) => {
    item.onclick = function () {
        if (previousIndex != index) {
            SliderDom.append(SliderItemsDom[previousIndex]);
            previousIndex = index
            SliderDom.prepend(SliderItemsDom[index]);
            carouselDom.classList.add('next');
        }
    }
})

