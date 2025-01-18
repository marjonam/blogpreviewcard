const body = document.body;
function createElement(tag, options = {}) {
  const element = document.createElement(tag);
  if (options.className) element.classList.add(...options.className.split(" "));
  if (options.textContent) element.textContent = options.textContent;
  if (options.src) element.src = options.src;
  if (options.href) element.href = options.href;
  return element;
}
const card = createElement("div", { className: "card" });
const image = createElement("img", {
  className: "card__image",
  src: "./img/blogimage.png",
});
const cardText = createElement("div", {
  className: "card__texts",
});
const cardBtn = createElement("p", {
  className: "card__button",
  textContent: "Learning",
});
const cardTime = createElement("time", {
  className: "card__time",
  textContent: "Published 21 Dec 2025",
});
const cardTitle = createElement("a", {
  className: "card__title",
  textContent: "HTML & CSS foundations",
  href: "#",
});
const cardSubtitle = createElement("p", {
  className: "card__subtitle",
  textContent:
    "These languages are the backbone of every website, defining structure, content, and presentation.",
});
const cardUser = createElement("div", {
  className: "card__user",
});
const cardUserLogo = createElement("img", {
  className: "card__user-logo",
  src: "./img/userpic-img.png",
});
const cardUserTItle = createElement("h4", {
  className: "card__user-title",
  textContent: "Greg Hooper",
});
cardText.append(cardBtn, cardTime, cardTitle, cardSubtitle);
cardUser.append(cardUserLogo, cardUserTItle);
card.append(image, cardText, cardUser);
body.appendChild(card);
