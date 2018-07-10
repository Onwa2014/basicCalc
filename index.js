var screenElement = document.querySelector('.screen');
var buttonsElement = document.querySelector('.buttons');
var btnElement = document.querySelector('.btn');

buttonsElement.addEventListener('click',function(evt){
  var elementClicked = evt.target;
  if(elementClicked.dataset.value === 'c'){
    screenElement.innerHTML = "";
  }
  if(elementClicked.dataset.value !== undefined && elementClicked.dataset.value !== 'c' && elementClicked.dataset.value !== '='){
  screenElement.innerHTML += elementClicked.dataset.value;
  }
  if(elementClicked.dataset.value === '='){
    screenElement.innerHTML = eval(screenElement.innerHTML);
  }
});
