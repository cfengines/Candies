const $btn = document.querySelector('#btn');

$btn.addEventListener('click', createFallingCandies);

function createFallingCandies() {
  const area = document.querySelector('main');
  const template = document.querySelector('.fallingcandies');
  const content = template.content.cloneNode(true);
  
  // Dodawanie identyfikatora do sklonowanego elementu
  content.firstElementChild.id = 'fallingCandy-' + Date.now();
  
  area.appendChild(content);
  
  // Dodawanie obsługi zdarzeń dla usuwania elementów
  const fallingCandy = area.querySelector('.fallingcandies');
  fallingCandy.addEventListener('click', function() {
    area.removeChild(fallingCandy);
  });
}