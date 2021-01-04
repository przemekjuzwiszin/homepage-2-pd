console.log("siema");
const name = "Przemek";
const age = 34;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lata`);
console.log(
  "Miło Cię widzieć, skoro tu zaglądasz, nie jest to przypadek. Idziesz w dobrym kierunku. Coś już umiesz brawo."
);

const header = document.querySelector(".main__heading-js");
console.log(header);

const mini = document.querySelector(".about__paragraph-js");
if (mini) {
  console.log(mini.innerHTML);
  mini.innerHTML = `Nazywam się ${name} i mam ${age} lata`;
} else {
  console.log("else");
}

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
console.log(paragraphs[3]);

const navigationSwitcher = document.querySelector(".navigation__switcher--js");

navigationSwitcher.addEventListener("click", (e) => {
  const navigationList = document.querySelector(".navigation__list--js");
  navigationList.classList.toggle("navigation__list--visible");
  if (navigationList.classList.contains("navigation__list--visible")) {
    navigationSwitcher.innerHTML = "⨯";
  } else {
    navigationSwitcher.innerHTML = "≡";
  }
});
