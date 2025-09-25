// lijst met namen
// opdracht: als de selectbox is aangeduid en de checkbox is aangevinkt maak dan nieuwe checkboxen tot er geen text meer instaat
// oppassen: Je moet eerst iets kiezen uit de  selectbox en dan de checkbox aanduiden.

const users = [
  { id: 1, naam: "Kleintjes", voornaam: "Karel" },
  { id: 2, naam: "Dotjes", voornaam: "Els" },
  { id: 3, naam: "Kleintjes", voornaam: "Steven" },
];

// elementen pakken
const selectBox = document.getElementById("mySelect");
const checkHuisdieren = document.getElementById("heeftHuisdieren");
const form = document.getElementById("myForm");

// container waar de velden komen
const huisdierenContainer = document.createElement("div");
huisdierenContainer.id = "huisdierenContainer";
form.insertBefore(huisdierenContainer, form.querySelector(".d-flex"));
//insertBefore(...) doet: zet dit nieuwe div vóór dat knoppenblok in het formulier.

// als checkbox verandert
checkHuisdieren.addEventListener("change", function () {
  // alles leegmaken als checkbox uitstaat
  huisdierenContainer.innerHTML = "";

  // alleen iets doen als checkbox aan staat en iemand is gekozen
  if (checkHuisdieren.checked && selectBox.value !== "") {
    maakNieuwVeld();
  }
});

// functie die een nieuw tekstveld maakt
function maakNieuwVeld() {
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Naam van huisdier";
  input.className = "form-control mt-2";

  // als er in dit veld getypt wordt → maak een nieuw veld eronder
  input.addEventListener("input", function () {
    // alleen nieuw veld maken als dit het laatste veld is
    if (huisdierenContainer.lastChild === input && input.value !== "") { //.lastChild = het laatste element dat in een container staat.
      maakNieuwVeld();
    }
  });

  huisdierenContainer.appendChild(input);
}
