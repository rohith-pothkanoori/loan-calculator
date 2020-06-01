const amount = document.querySelector(".loan-amount");
const interest = document.querySelector(".interest");
const years = document.querySelector(".years");
let m_payment = document.querySelector(".m-payment");
let t_payment = document.querySelector(".t-payment");
let totinterest = document.querySelector(".resultall");
let container = document.querySelector(".container");

container.addEventListener("submit", function (e) {
  document.querySelector(".loader").style.display = "block";

  document.querySelector(".result").style.display = "none";
  setTimeout(calResult, 1000);

  e.preventDefault();
});

function calResult(e) {
  let r = interest.value;
  console.log(r);
  let n = years.value * 12;
  let a = amount.value;
  let p;
  p = r / (100 * 12);
  let x = Math.pow(1 + p, n);
  let m = (amount.value * p * x) / (x - 1);

  if (isFinite(m)) {
    m_payment.value = m.toFixed(2);
    t_payment.value = (n * m).toFixed(2);
    totinterest.value = (t_payment.value - amount.value).toFixed(2);
    document.querySelector(".loader").style.display = "none";

    document.querySelector(".result").style.display = "block";
  } else {
    showError("Please Check The Input");
  }
  e.preventDefault();
}
function showError(er) {
  document.querySelector(".loader").style.display = "none";

  const errorDiv = document.createElement("div");
  const heading = document.querySelector(".heading");
  const query = document.querySelector(".query");
  errorDiv.className = "showerror";
  errorDiv.appendChild(document.createTextNode(er));
  query.insertBefore(errorDiv, heading);
  setTimeout(timerdown, 2000);
}
function timerdown() {
  document.querySelector(".showerror").remove();
}
