let paragraf = document.getElementById('opis');
let przycisk = document.querySelector('button');
przycisk.onclick = function () {
	paragraf.textContent = 'Tekst tekst tekst';
};
console.log(przycisk);
