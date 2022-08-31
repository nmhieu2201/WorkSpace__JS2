let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

const renderGlassesListImage = () => {
  for (let img of dataGlasses) {
    let urlImage = `
        <div class="img"  style="display: flex;flex-direction: column;justify-content: center">
         <img id='img-class' style="width: 100px;cursor: pointer;" src="${img.src}" alt="" />
        </div>
    `;
    const eleGlass = document.querySelector("#vglassesList");
    eleGlass.insertAdjacentHTML("afterbegin", urlImage);
    const imgEl = document.getElementById("img-class");
    imgEl.addEventListener("click", () => {
      let info = document.querySelector(".info");

      let vImg = document.querySelector(".vImg");
      if (info) {
        info.remove();
        vImg.remove();
      }
      renderGlassBySrc(img);
    });
  }
};

const renderGlassBySrc = (glass) => {
  const eleGlass2 = document.querySelector("#glassesInfo");
  const eleGlass1 = document.querySelector("#avatar");
  const html1 = `
    <div class = "vImg">
    <img src="${glass.virtualImg}" />
    </div>
  `;
  const html2 = `
    <div class="info">
    <h1 class="name">${glass.name} ${glass.brand} (${glass.color})</h1>
    <span class="cost">${glass.price}$</span>
    <span class="type">Stoking</span>
    <h3 class="description">
        ${glass.description}
    </h3>
    </div>
  `;
  eleGlass1.insertAdjacentHTML("afterbegin", html1);
  eleGlass2.insertAdjacentHTML("afterbegin", html2);
};
const removeGlass = () => {
  let avatar = document.querySelector(".vglasses__model");
  let info = document.querySelector(".vglasses__info");
  avatar.style.display = "none";
  info.style.display = "none";
  console.log("removeGlass");
};
const addGlass = () => {
  let avatar = document.querySelector(".vglasses__model");
  let info = document.querySelector(".vglasses__info");
  avatar.style.display = "block";
  info.style.display = "block";
  console.log("addGlass");
};
window.onload = () => {
  renderGlassesListImage();
};
