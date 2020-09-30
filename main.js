console.log ('siema');
const name = 'Przemek';
const age = 34;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lata`);
console.log('Miło Cię widzieć, skoro tu zaglądasz, nie jest to przypadek. Idziesz w dobrym kierunku. Coś już umiesz bravo')

const header = document.querySelector('.main__heading-js');
console.log(header);

const mini = document.querySelector('.about__paragraph-js');
if(mini){
    console.log(mini.innerHTML);
    mini.innerHTML = `Nazywam się ${name} i mam ${age} lata`; 
}else{
    console.log('else');
}

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[3]);