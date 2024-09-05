// Hover effect

let everythingForEffects = document.getElementsByClassName('effect');
for (let text of everythingForEffects) {

    text.innerHTML = text.innerText.split('').map((letters, i) => `<span style="
    transition-delay:${i*20}ms">${letters}</span>`).join('');}

