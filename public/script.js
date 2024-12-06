const countries = [
  "USA",
  "Canada",
  "France",
  "Germany",
  "India",
  "KSA",
  "Kosovo",
  "Kazakhstan",
  "Kaznam",
  "Tunisia"
];

function generateTemperatureData() {
  let tableBody = document.querySelector("#climate-table tbody");
  tableBody.innerHTML = "";

  countries.forEach((country) => {
    const randomTemperature = (Math.random() * 100).toFixed(2);

    let idealHour = "Inconnu";
    if (randomTemperature < 20) {
      idealHour = "Toute la journée";
    } else if (randomTemperature >= 20 && randomTemperature < 30) {
      idealHour = "Matinée et soirée";
    } else if (randomTemperature >= 30 && randomTemperature < 40) {
      idealHour = "Seulement le matin";
    } else {
      idealHour = "Impossible de vivre ici !";
    }

    const isTsunamiPossible = Math.random() < 0.3;
    const tsunamiText = isTsunamiPossible ? "Oui" : "Non";

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
            <td>${country}</td>
            <td>${randomTemperature}°C</td>
            <td>${idealHour}</td>
            <td class="${
              isTsunamiPossible ? "tsunami-yes" : "tsunami-no"
            }">${tsunamiText}</td>
        `;
    tableBody.appendChild(newRow);
  });
}
