// Hover effect

let text = document.querySelector('.effect');
text.innerHTML = text.innerText.split('').map((letters, i) => `<span style="transition-delay:${i*20}ms">${letters}</span>`).join('');

