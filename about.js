console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Submitted Successfully!");
}

let form = document.querySelector("#contact");
const mainImage = document.getElementById("duckImg");

form.addEventListener("submit", handleSubmit);
mainImage.addEventListener("mouseover", () => {
  alert("You look nice :)");
});
