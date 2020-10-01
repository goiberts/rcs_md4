let dati = [
    {name: "Janis", nr:[3, 4, 11]},
    {name: "Pēteris", nr:[1, 2, 6]},
    {name: "Ilze", nr:[12, 14, 16]},
    {name: "Zane", nr:[22, 24, 27]},
    {name: "Emīls", nr:[41,40, 48]},
];

let tout = ""
tout += `<table>`
tout += `<tr>`
tout += `<th>Vārds</th>`
tout += `<th>Nr 1</th>`
tout += `<th>Nr 2</th>`
tout += `<th>Nr 3</th>`
tout += `</tr>`
tout += `<tr>`
tout += `<td>${dati[0].name}</td>`
tout += `<td>${dati[0].nr[0]}</td>`
tout += `<td>${dati[0].nr[1]}</td>`
tout += `<td>${dati[0].nr[2]}</td>`
tout += `</tr>`
tout += `<tr>`
tout += `<td>${dati[1].name}</td>`
tout += `<td>${dati[1].nr[0]}</td>`
tout += `<td>${dati[1].nr[1]}</td>`
tout += `<td>${dati[1].nr[2]}</td>`
tout += `</tr>`
tout += `<tr>`
tout += `<td>${dati[2].name}</td>`
tout += `<td>${dati[2].nr[0]}</td>`
tout += `<td>${dati[2].nr[1]}</td>`
tout += `<td>${dati[2].nr[2]}</td>`
tout += `</tr>`
tout += `<tr>`
tout += `<td>${dati[3].name}</td>`
tout += `<td>${dati[3].nr[0]}</td>`
tout += `<td>${dati[3].nr[1]}</td>`
tout += `<td>${dati[3].nr[2]}</td>`
tout += `</tr>`
tout += `<tr>`
tout += `<td>${dati[4].name}</td>`
tout += `<td>${dati[4].nr[0]}</td>`
tout += `<td>${dati[4].nr[1]}</td>`
tout += `<td>${dati[4].nr[2]}</td>`
tout += `</tr>`
tout += `</table>`

document.getElementById("md").innerHTML = tout;