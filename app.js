const imagesNode = document.querySelectorAll('.slider_img');
const indicatorBoxNode = document.querySelector('.indicator_box');
const sliderNode = document.querySelector('.slider');
const btnNextNode = document.querySelector('.next');
const btnPrevNode = document.querySelector('.prev');

let width = 0;

// Функция для рендера пагинации
function showIndicator() {
  const indicator = document.createElement('div');
  indicator.className = 'indicator';
  return indicator;
}

const renderIndicator = (indicator) => {
  for (let i = 0; i < imagesNode.length; i++) {
    const list = showIndicator(indicator);
    indicatorBoxNode.append(list);
  }
  const indicatorNode = document.querySelectorAll('.indicator');
  indicatorNode.forEach((node, i) => {
    if (i === width) {
      node.style.backgroundColor = 'white';
    }
  });
};

renderIndicator();

// Функция для показа предыдущего слайда
function showPrev() {
  if (width - 1 < 0) {
    width = 0;
    updateSlider();
  } else {
    width -= 1;
    updateSlider();
  }
}

// Функция для показа следующего слайда
function showNext() {
  if (width + 1 > imagesNode.length - 1) {
    width = 0;
    updateSlider();
  } else {
    width += 1;
    updateSlider();
  }
}

// Функция для обновления отображения слайдера
function updateSlider() {
  sliderNode.style.transform = `translateX(-${width}00%)`;
  const indicatorNode = document.querySelectorAll('.indicator');
  indicatorNode.forEach((node, i) => {
    if (i === width) {
      node.style.backgroundColor = 'white';
    } else {
      node.style.backgroundColor = '';
    }
  });
}

btnNextNode.addEventListener('click', showNext);
btnPrevNode.addEventListener('click', showPrev);
