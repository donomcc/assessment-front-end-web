const colorBtn = document.getElementById("color");
const placeBtn = document.getElementById("place");
const ritualBtn = document.getElementById("ritual");

colorBtn.addEventListener("click", () => {
  alert("My favorite color is green!");
});

placeBtn.addEventListener("click", () => {
  alert("My favorite place is home.");
});

ritualBtn.addEventListener("click", () => {
  alert("My favorite ritual is showering before bed.");
});
