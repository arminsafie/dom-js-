//geting elements
const addMovieModalEl = document.getElementById("add-modal");
//todo const addMovieModal = document.querySelector('#add-modal');
//todo const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
//todo const startAddMovieButton = document.querySelector('header').lastElementChild;
const backDropEl = document.getElementById("backdrop");
const cancelAddMovieBtn = addMovieModalEl.querySelector(".btn--passive");
const comformAddMovieBtn = addMovieModalEl.querySelector(".btn--success");
const userInput = addMovieModalEl.querySelectorAll("input");
// const comformAddMovieBtn = cancelAddMovieBtn.nextSibling; you can use this as well
const enteryTextEl = document.getElementById("entry-text");

const movis = [];
//*function part

const updateUi = () => {
  if ((movis.length = 0)) {
    enteryTextEl.style.display = "block";
  } else {
    enteryTextEl.style.display = "none";
  }
};
const togglebackDrop = () => {
  backDropEl.classList.toggle("visible");
};

const toggleMovieModel = () => {
  addMovieModalEl.classList.toggle("visible");
  togglebackDrop();
};

const backdropClickHandeler = () => {
  toggleMovieModel();
};

const cancelAddMovieHandeler = () => {
  toggleMovieModel();
};
const addMovieHandeler = () => {
  const titlevalue = userInput[0].value;
  const imageUrlValue = userInput[1].value;
  const ratingValue = userInput[2].value;
  if (
    titlevalue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +parseInt.ratingValue < 1 ||
    +parseInt.ratingValue > 5
  ) {
    alert("please enter valid value ");
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titlevalue,
    imgUrl: imageUrlValue,
    rating: ratingValue,
  };

  movis.push(newMovie);
  console.log(movis);
  clearMovieInput();
  toggleMovieModel();
  renderNewMovieElemnts(newMovie.title, newMovie.imgUrl, newMovie.rating);
  updateUi();
};
const deletMovieHandeler = () => {};
const renderNewMovieElemnts = (id, title, imgUrl, rating) => {
  const newMovieElemnt = document.createElement("li");
  newMovieElemnt.className = "movie-element";
  newMovieElemnt.innerHTML = `
    <div class="movie-element__image">
      <img src="${imgUrl}" alt="${title}" />
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 Stars</p>
    </div>
  `;
  newMovieElemnt.addEventListener("click", deletMovieHandeler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElemnt);
};
const clearMovieInput = () => {
  for (const input of userInput) {
    input.value = "";
  }
};

//!btn handeler
startAddMovieButton.addEventListener("click", toggleMovieModel);
backDropEl.addEventListener("click", backdropClickHandeler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandeler);
comformAddMovieBtn.addEventListener("click", addMovieHandeler);
