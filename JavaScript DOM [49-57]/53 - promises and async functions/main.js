/*
  Sukurti UI, kuriame vartotojas galėtų pasirinkti vartotoją, ir tuomet pagal pasirinktą
  vartotoją matytūsi TIK tok vartotojo postai.


  1. Atvaizdavimo darbai
    1. Padaryti lentelės vaizdą pagal duomenis kuriuos planuoju parsisiųsti
    2. select'o vaizdą, pagal duomenis kuriuos planuoju parsisiųsti 

  2. Parsiuntimo darbai
    1. Atsiųsti vartotojus
    2. Suformuoti select'o pasirinkimus pagal parsiųstus vartotojus
    3. Apdoroti ir išsitestuoti nesėkmės atvejį
*/

const userSelect = document.querySelector('#user-select');

const renderUserOptions = (users) => {
  const optionsStr = users
    .map(({ username, name }) => `<option>${username} - ${name}</option>`)
    .join('');
  userSelect.innerHTML += optionsStr;
}


// 2.1.
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then(renderUserOptions)



