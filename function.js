const productsDiv = document.getElementById("products");
const cartList = document.getElementById("cart");
const totalEl = document.getElementById("total");

let cart = [];

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategories(json.categories));
};
const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("level-container").classList.add("hidden");
  } else {
    document.getElementById("level-container").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};
const removeActive = () => {
  const treesButton = document.querySelectorAll(".trees-btn");

  treesButton.forEach((btn) => {
    btn.classList.remove("active");
  });
};
const loadPlant = (id) => {
  manageSpinner(true);
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`categorie-btn-${id}`);
      displayLoadPlants(data.plants);
      clickBtn.classList.add("active");
    });
};
const loadTreeDetail = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayTreeDetails(json.plants));
};
const displayTreeDetails = (plant) => {
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `<div class="">
          <h2 class="font-bold text-2xl">Name: ${plant.name}</h2>
          <img src="${plant.image}" class="h-[287px] w-full object-cover rounded-xl  mt-3" alt="" />
          <p class="mt-4">
            <span class="font-bold text-[16px]">Category:</span> ${plant.category}
          </p>
          <p class="mt-1">
            <span class="font-bold text-[15px]">Price:</span><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${plant.price}
          </p>
          <p class="mt-1">
            <span class="font-bold text-[16px]">Description:</span> ${plant.description}
          </p>
        </div>`;
  document.getElementById("my_modal_5").showModal();
};

const displayLoadPlants = (trees) => {
  const plantCointainer = document.getElementById("level-plants");
  plantCointainer.innerHTML = "";
  for (let tree of trees) {
    const treeDiv = document.createElement("div");
    treeDiv.innerHTML = `
    <div class="bg-white h-[430px] w-[345px] p-3 rounded-xl">
            <img src="${tree.image}" class="h-[187px] w-full object-cover rounded-xl " alt="" />
            <button onclick="loadTreeDetail(${tree.id})" class="font-bold mt-2">${tree.name}</button>
            <p>
              ${tree.description}
            </p>
            <div class="flex justify-between mt-2">
              <h4
                class="h-[28px] w-[110px] bg-[#DCFCE7] text-[#15803D] font-medium text-[13px] rounded-xl text-center pt-1"
              >
               ${tree.category}
              </h4>
              <p class="font-bold">
                <i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price}
              </p>
            </div>
            <button onclick="onClick(${tree.id})"  class="btn w-full bg-[#15803D] text-white rounded-3xl mt-3">
              Add to Cart
            </button>
          </div>
    `;
    plantCointainer.append(treeDiv);
  }
  manageSpinner(false);
};

const loadPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayPlants(json.plants));
};

const displayPlants = (plants) => {
  const levelPlants = document.getElementById("level-plants");
  levelPlants.innerHTML = "";
  for (let plant of plants) {
    const plantDiv = document.createElement("div");
    plantDiv.innerHTML = `
             <div class="bg-white h-[430px] w-[345px] p-3 rounded-xl">
            <img src="${plant.image}" class="h-[187px]  w-full object-cover rounded-xl  " alt="" />
            <button onclick="loadTreeDetail(${plant.id})" class="font-bold mt-2">${plant.name}</button>
            <p>
              ${plant.description}
            </p>
            <div class="flex justify-between mt-2">
              <h4
                class="h-[28px] w-[110px] bg-[#DCFCE7] text-[#15803D] font-medium text-[13px] rounded-xl text-center pt-1"
              >
               ${plant.category}
              </h4>
              <p class="font-bold">
                <i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}
              </p>
            </div>
            <button onclick="onClick(${plant.id})" class=" btn w-full bg-[#15803D] text-white rounded-3xl mt-3">
              Add to Cart
            </button>
          </div>
    `;

    levelPlants.append(plantDiv);
  }
};

const onClick = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => clickPlants(json.plants));
};
let count = 0;
const clickPlants = (plants) => {
  const levelPlants = document.getElementById("main-container");
  const plantDiv = document.createElement("div");
  plantDiv.innerHTML = `
    <div class="flex bg-[#e2ebe5] p-2 rounded-xl my-3 justify-between">  
  <div class="">
        <h1 class="font-bold">${plants.name}</h1>
        <p><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plants.price}   <i class="fa-solid fa-xmark"></i> 1</p>
      </div>
      <i id="clear-btn" class="remove fa-solid fa-xmark cursor-pointer  mt-5"></i>
</div>
  `;
  count += plants.price;
  document.getElementById("total").innerHTML = count;
  plantDiv.querySelector(".remove").addEventListener("click", () => {
    plantDiv.remove();
    count -= plants.price;
    console.log(count);
    document.getElementById("total").innerText = count;
  });

  // ------------------------------------------------------------------------------
  levelPlants.append(plantDiv);
};

loadPlants();
const displayCategories = (categories) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  for (let categorie of categories) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
      <button id="categorie-btn-${categorie.id}" onclick="loadPlant(${categorie.id})" class="ml-[160px] font-semibold text-[15px]  rounded-[8px] pl-5 btn-xs sm:btn-sm md:btn-md lg:btn-lg text-left xl:btn-xl h-[35px] w-[250px] bg-[#b0e7c1] hover:bg-[#15803D] hover:text-white trees-btn">
        ${categorie.category_name}
      </button>
      `;
    levelContainer.append(btnDiv);
  }
};
loadCategories();
