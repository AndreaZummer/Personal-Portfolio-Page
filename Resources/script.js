// Hover effect

let everythingForEffects = document.getElementsByClassName('effect');
for (let text of everythingForEffects) {

    text.innerHTML = text.innerText.split('').map((letters, i) => `<span style="
    transition-delay:${i*20}ms; filter:hue-rotate(${i*8}deg">${letters}</span>`).join('');}

let footerText = document.getElementById('copy');

footerText.innerHTML = footerText.innerText.split('').map((letters, i) => `<span style="filter:hue-rotate(${i*5}deg">${letters}</span>`).join('');





