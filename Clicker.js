const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const model = document.querySelector(button.dataset.modalTarget)
    openModal(model)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(model)
  })
})
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}
function openModal(model) {
  if (modal == null) return
  model.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function closeModal(model) {
  if (modal == null) return
  model.classList.remove('active')
  overlay.classList.remove('active')
}


//      Game


//Amount of clicks // Amount added per second
var clicks = 0;

var CPS = 0;





// Function Update (VERY  IMPORTANT)

setInterval(Update, 15);

function Update() {
  document.getElementById("ClicksCounter").innerText = "Clicks: " + clicks;
  document.getElementById("ACID").innerText = "Buy a Autoclicker (" + ACOWN +"), Cost: " + ACcost;
  document.getElementById("CPS").innerText = "Shop // CPS: " + CPS;
}


// Add Button
function increment() {
  clicks++;
}


// Shop Functions ETC ~ //////////////////////////////////////////

//Amount of Autoclicker and cost
setInterval(Autoclicker, 800);
var ACamount = 0;
var ACcost = 50;
var ACOWN = 0;
// AutoClicker Functions
function ACbuy() {
  if (clicks >= ACcost) {
    clicks = clicks - ACcost;
    ACOWN = ACOWN + 1;
    CPS = CPS + 0.25;
    ACamount = ACamount + 0.25;
    ACcost = ACcost + 50;
  }
}

function ACSell() {
  if (ACOWN >= 1) {
    ACOWN = ACOWN - 1;
    CPS = CPS - 0.25;
    ACamount = ACamount - 0.25;
    clicks = clicks + 50;
  }
}

function Autoclicker() {
  clicks = ACamount + clicks;
  clicks = clicks;
}
// End of AutoClicker
