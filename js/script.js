const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submitado");



  verificarCalori();
});

function verificarCalori() {
  const idade = getInputNumberValue("age");
  const peso = getInputNumberValue("weight");
  const height=document.querySelector("#height").value;

  const altura = height.replace(/,/g, ".")

  console.log(altura)

  const gender = getSelectValue("gender");
  const activeLevel = getSelectValue("activity_level");

  

  const tmb = Math.round(
    gender === "female"
      ? 655 + 9.6 * peso + 1.8 * altura - 4.7 * idade
      : 65 + 13.7 * peso + 5 * altura - 6.8 * idade
  );

  console.log(tmb);

  const maintenance = Math.round(tmb * Number(activeLevel));
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;

  console.log(maintenance);
  const layout = `
  <div class="result-content">
  <h2>Aqui está o resultado:</h2>
  <ul>
  <li>Seu metabolismo é de <strong>${tmb}calorias</strong></li>
  <li>
    Para manter o seu peso precisa consumir em média
    <strong>${maintenance} calorias</strong>
  </li>
  <li>
    Para peder peso você precisa consumir em média
    <strong>${loseWeight} calorias</strong>
  </li>
  <li>
    Para ganhar peso você precisa em média
    <strong>${gainWeight} calorias</strong>
  </li>
  </ul>
</div>
   `;

  const result = document.querySelector(".result");
  result.innerHTML = layout;
}

function getSelectValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}
