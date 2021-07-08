const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')  //splits each letter into an array
        .map((letter, i) => `<span style="transition-delay: ${i * 50}ms">${letter}</span>`)
        .join('')
})