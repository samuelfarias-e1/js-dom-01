const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('para');
content.textContent = 'Ei, sou vermelho!';

content.style.cssText = "color: red";

const t3 = document.createElement('h3');
t3.classList.add('t3h3');
t3.textContent = 'Eu sou um h3 azul!';

t3.style.cssText = "color: blue";

const dpink = document.createElement('div');
dpink.classList.add('boxpink');
dpink.style.border = "1px solid black";
dpink.style.backgroundColor = "pink";

const cdiv = document.getElementsByClassName('dpink');

const t1h1 = document.createElement('h1');
t1h1.classList.add('h1t1');
t1h1.textContent = 'Eu estou dentro de uma div';

const ppink = document.createElement('p');
ppink.classList.add('p-pink');
ppink.textContent = 'Eu também!';



container.appendChild(content);
container.appendChild(t3);
container.appendChild(dpink);
dpink.appendChild(t1h1);
dpink.appendChild(ppink);



btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});




