const btn = document.querySelector('button')
const p = document.querySelector('p')
btn.addEventListener('click', (e) => {
    e.stopPropagation()
    const p = btn.querySelector('p')
    p.hidden = false
})

p.addEventListener('click', (e) => {
    e.stopPropagation()
    p.hidden = true;
    console.log('clicked')
})

console.log('hello')