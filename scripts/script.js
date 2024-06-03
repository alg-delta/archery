// Старт модальне вікно
let openModal = document.querySelectorAll(".card-img-block");
let closeModal = document.querySelector(".close-modal");
let modalWrapper = document.querySelector(".modal-wrapper");
let modalBtn = document.querySelector(".modal-btn");
for (item of openModal) {
  item.addEventListener("click", function () {
    modalWrapper.style.display = "flex";
  });
}
closeModal.addEventListener("click", function () {
  modalWrapper.style.display = "none";
  modalWrapper2.style.display = "none";
  modalWrapper0.style.display = "none";
});
modalBtn.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});
modalWrapper.addEventListener("click", function (event) {
  if (event.target === modalWrapper) {
    modalWrapper.style.display = "none";
  }
});
window.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    modalWrapper.style.display = "none";
  }
});
// Кінець модального вікна
// Старт Tabs
let tabs = document.querySelectorAll(".tab");
let cards = document.querySelectorAll(".card");
for (tab of tabs) {
  tab.addEventListener("click", onClickTab);
}
function onClickTab(event) {
  for (tab of tabs) {
    tab.classList.remove("tabs-active");
  }
  let activeTab = event.target;
  activeTab.classList.add("tabs-active");
  let filter = activeTab.getAttribute("data-target");
  console.log(filter);
  for (card of cards) {
    let cardId = card.getAttribute("data-id");
    if (cardId === filter) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}
for (card of cards) {
  let cardId = card.getAttribute("data-id");
  if (cardId === "centre") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
}
// The end tabs

let openModal0 = document.querySelectorAll(".banner-btn-explore");
let closeModal0 = document.querySelector(".close-modal0");
let modalWrapper0 = document.querySelector(".modal-wrapper0");
let modalBtnYes1 = document.querySelectorAll(".yes1");
let modalBtnNo1 = document.querySelector(".no1");
for (item of openModal0) {
  item.addEventListener("click", function () {
    modalWrapper0.style.display = "flex";
  });
}
closeModal0.addEventListener("click", function () {
  modalWrapper3.style.display = "none";
  modalWrapper2.style.display = "none";
  modalWrapper0.style.display = "none";
  modalWrapper4.style.display = "none";
  modalWrapper5.style.display = "none";
  modalWrapper6.style.display = "none";
});

for (item of modalBtnYes1) {
  item.addEventListener("click", function () {
    modalWrapper0.style.display = "none";
    modalWrapper2.style.display = "none";
    modalWrapper3.style.display = "none";
    modalWrapper4.style.display = "none";
    modalWrapper5.style.display = "none";
    modalWrapper6.style.display = "none";
    modalWrapper.style.display = "flex";
  });
}
// modalBtn0.addEventListener("click", function () {
//   modalWrapper0.style.display = "none";
// });
modalWrapper0.addEventListener("click", function (event) {
  if (event.target === modalWrapper0) {
    modalWrapper0.style.display = "none";
  }
});
window.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    modalWrapper0.style.display = "none";
  }
});

modalBtnNo1.addEventListener("click", function () {
  modalWrapper0.style.display = "none";
  modalWrapper2.style.display = "flex";
  modalWrapper3.style.display = "none";
  modalWrapper5.style.display = "none";
});
// Кінець модального вікна
// modal2
let closeModal2 = document.querySelector(".close-modal2");
let modalWrapper2 = document.querySelector(".modal-wrapper2");
let modalBtnNo2 = document.querySelector(".no2");

closeModal2.addEventListener("click", function () {
  modalWrapper2.style.display = "none";
  modalWrapper2.style.display = "none";
  modalWrapper0.style.display = "none";
  modalWrapper5.style.display = "none";
});

// modalBtn0.addEventListener("click", function () {
//   modalWrapper0.style.display = "none";
// });
modalWrapper2.addEventListener("click", function (event) {
  if (event.target === modalWrapper0) {
    modalWrapper2.style.display = "none";
  }
});
window.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    modalWrapper2.style.display = "none";
  }
});

modalBtnNo2.addEventListener("click", function () {
  modalWrapper0.style.display = "none";
  modalWrapper2.style.display = "none";
  modalWrapper3.style.display = "flex";
  modalWrapper5.style.display = "none";
});
// Кінець модального вікна
// modal3
let closeModal3 = document.querySelector(".close-modal3");
let modalWrapper3 = document.querySelector(".modal-wrapper3");
let modalBtnNo3 = document.querySelector(".no3");

closeModal2.addEventListener("click", function () {
  modalWrapper3.style.display = "none";
  modalWrapper2.style.display = "none";
  modalWrapper0.style.display = "none";
  modalWrapper5.style.display = "none";
});

// modalBtn0.addEventListener("click", function () {
//   modalWrapper0.style.display = "none";
// });
modalWrapper3.addEventListener("click", function (event) {
  if (event.target === modalWrapper0) {
    modalWrapper3.style.display = "none";
  }
});
window.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    modalWrapper3.style.display = "none";
  }
});

modalBtnNo3.addEventListener("click", function () {
  modalWrapper0.style.display = "none";
  modalWrapper2.style.display = "none";
  modalWrapper3.style.display = "none";
  modalWrapper4.style.display = "flex";
  modalWrapper5.style.display = "none";
});
// Кінець модального вікна
// modal4
let closeModal4 = document.querySelector(".close-modal4");
let modalWrapper4 = document.querySelector(".modal-wrapper4");
let modalBtnNo4 = document.querySelector(".no4");

closeModal4.addEventListener("click", function () {
  modalWrapper3.style.display = "none";
  modalWrapper2.style.display = "none";
  modalWrapper0.style.display = "none";
  modalWrapper4.style.display = "none";
  modalWrapper5.style.display = "none";
});

// modalBtn0.addEventListener("click", function () {
//   modalWrapper0.style.display = "none";
// });
modalWrapper4.addEventListener("click", function (event) {
  if (event.target === modalWrapper0) {
    modalWrapper3.style.display = "none";
  }
});
window.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    modalWrapper3.style.display = "none";
  }
});

modalBtnNo4.addEventListener("click", function () {
  modalWrapper0.style.display = "none";
  modalWrapper2.style.display = "none";
  modalWrapper3.style.display = "none";
  modalWrapper4.style.display = "none";
  modalWrapper5.style.display = "flex";
});
// Кінець модального вікна
// modal5
let closeModal5 = document.querySelector(".close-modal5");
let modalWrapper5 = document.querySelector(".modal-wrapper5");
let modalBtnNo5 = document.querySelector(".no5");

closeModal4.addEventListener("click", function () {
  modalWrapper3.style.display = "none";
  modalWrapper2.style.display = "none";
  modalWrapper0.style.display = "none";
  modalWrapper4.style.display = "none";
  modalWrapper5.style.display = "none";
});

// modalBtn0.addEventListener("click", function () {
//   modalWrapper0.style.display = "none";
// });
modalWrapper5.addEventListener("click", function (event) {
  if (event.target === modalWrapper0) {
    modalWrapper5.style.display = "none";
  }
});
window.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    modalWrapper5.style.display = "none";
  }
});

modalBtnNo5.addEventListener("click", function () {
  modalWrapper0.style.display = "none";
  modalWrapper2.style.display = "none";
  modalWrapper3.style.display = "none";
  modalWrapper4.style.display = "none";
  modalWrapper5.style.display = "flex";
});
// Кінець модального вікна
// modal6
let closeModal6 = document.querySelector(".close-modal6");
let modalWrapper6 = document.querySelector(".modal-wrapper6");
let modalBtnNo6 = document.querySelector(".no6");

closeModal6.addEventListener("click", function () {
  modalWrapper3.style.display = "none";
  modalWrapper2.style.display = "none";
  modalWrapper0.style.display = "none";
  modalWrapper4.style.display = "none";
  modalWrapper5.style.display = "none";
  modalWrapper6.style.display = "none";
});

// modalBtn0.addEventListener("click", function () {
//   modalWrapper0.style.display = "none";
// });
modalWrapper6.addEventListener("click", function (event) {
  if (event.target === modalWrapper0) {
    modalWrapper6.style.display = "none";
  }
});
window.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    modalWrapper6.style.display = "none";
  }
});

modalBtnNo5.addEventListener("click", function () {
  modalWrapper0.style.display = "none";
  modalWrapper2.style.display = "none";
  modalWrapper3.style.display = "none";
  modalWrapper4.style.display = "none";
  modalWrapper5.style.display = "none";
  modalWrapper6.style.display = "flex";
});
// Кінець модального вікна
