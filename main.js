//oprdacht 1
const element = document.querySelector('.intro');
element.textContent = "Dit is mijn eerste querySelector.";   


//opdracht 2
const blog = document.querySelector('.blog');
blog.textContent = "Hier schrijf ik mijn blog artikel.";


//opdracht 3
const mix = document.querySelector('.mix');
mix.innerHTML = '<h1>Deze tekst bevat ook een h element</h1>'


// opdracht 4
const todo = document.querySelector('.todo');
for(let i = 0; i <= 10; i++) {
    todo.innerHTML += `<li> item ${i} </li>`;
}


//opdracht 5
const todo2 = document.querySelector('.todo');
for(let i = 0; i <= 10; i++) {
    todo2.innerHTML += `<button> item ${i} </button>`;
}


//opdracht 6
const listItems = document.querySelectorAll('.item');
let i = 0;
while (i < listItems.length) {
  const showItem = listItems[i];
  showItem.textContent = 'Hoi allemaal';
  i++;
}


//opdracht 7
const styling = document.querySelector('.styling');
styling.innerHTML += '<p> Dit is een element met styling </p>';
styling.style.background = 'violet';


//opdracht 8
const box = document.querySelector('.box');
box.innerHTML += '<p>Dit is een element met border.</p>'
box.style.border = '1px solid black'


//opdracht 9
const wrapper = document.querySelector('.wrapper');
wrapper.innerHTML += '<div class="card"><img src="https://www.w3schools.com/howto/img_avatar.png"alt="Avatar"style="width:100%"><div class="container"><h4><b>Memphis Depay</b></h4><p>Spits</p></div></div>'


