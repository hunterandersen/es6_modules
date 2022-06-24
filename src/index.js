import Wishlist from "./Wishlist.js";
import Car from "./Car.js";

let car1 = new Car("Mazda", "CX-9", "2020");
let car2 = new Car("Ford", "Fiesta", "2016");

let myWishlist = new Wishlist(car1, car2, car1);

myWishlist.addCar(new Car("Mazda", "Mazda3", 2015));
myWishlist.addCar(new Car("Ford", "F-250", 2022));

renderWishList(myWishlist);

const submitForm = document.querySelector("#submitForm");
const makeInput = document.querySelector("#makeInput");
const modelInput = document.querySelector("#modelInput");
const yearInput = document.querySelector("#yearInput");

const removeButton = document.querySelector(".removeBtn");
const carMakeP = document.querySelector("#car-make");
const carModelP = document.querySelector("#car-model");
const carYearP = document.querySelector("#car-year");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let make = makeInput.value;
  let model = modelInput.value;
  let year = yearInput.value;

  makeInput.value = "";
  modelInput.value = "";
  yearInput.value = "";

  myWishlist.addCar(new Car(make, model, year));
  renderWishList(myWishlist);
});

function renderWishList(wishList) {
  let list = wishList;

  const wishListUL = document.querySelector("#wishListContainer > ul");
  let prevElements = wishListUL.getElementsByTagName("li");
  for (let item of Array.from(prevElements)) {
    item.remove();
  }

  for (let car of list.carsList) {
    let info = car.getInfo();
    if (info.length > 2) {
      let newCar = document.createElement("li");
      newCar.textContent = info;
      newCar.classList.add("list-group-item");
      newCar.addEventListener("click", () => {
        carMakeP.textContent = car.make;
        carModelP.textContent = car.model;
        carYearP.textContent = car.year;

        removeButton.disabled = false;
        //Overwrite the previous click event handler so that it only ever refers to the single car
        removeButton.onclick = (e) => {
          list.removeCar(car);
          carMakeP.textContent = "";
          carModelP.textContent = "";
          carYearP.textContent = "";

          removeButton.disabled = true;
          renderWishList(list);
        };
      });
      wishListUL.appendChild(newCar);
    }
  }
}
