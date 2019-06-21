function addToPokedex(event) {
  event.preventDefault(); //Prevents default form events from firing. ex: sending request to back-end.
  let name = event.target.pokemon.value;
  let description = event.target.description.value;
  //console.log("event", event);

  let listItem = document.createElement("li");
  let list = document.getElementById("pokemon-list");

  listItem.innerHTML = `${name} - ${description}`;
  list.appendChild(listItem);
}

function clearForm() {
  document.getElementById("pokedex").reset();
}

document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("pokedex");
  form.addEventListener("submit", function() {
    //when event fires addToPokedex function is CALLED.
    addToPokedex(event);
    //event = object representing event of the event listener
    clearForm();
  });
});
