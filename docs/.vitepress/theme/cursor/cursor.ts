console.log("Custom Cursor Loading!")

import './cursor.sass'

const cr = document.createElement('div')
cr.classList.add('cursor-ring') // 添加类名以便应用样式
document.body.appendChild(cr)

let tx = 0
let ty = 0
let cx = 0
let cy = 0

document.addEventListener('mousemove', (e) => {
    tx = e.clientX
    ty = e.clientY
})

document.addEventListener('mouseover', mouseStyleChange)
document.addEventListener('mouseout',  mouseStyleChange)

function mouseStyleChange(e: MouseEvent) {
    if (e.target instanceof HTMLElement) {
        const t = e.target
        const s = window.getComputedStyle(t)
        const c = s.getPropertyValue("--custom-cursor-ring")
        if (c === "active") cr.classList.add('active')
        else cr.classList.remove('active')
    }
}

function animate() {
    cx += (tx - cx) * 0.35
    cy += (ty - cy) * 0.35
    cr.style.left = `${cx}px`
    cr.style.top  = `${cy}px`

    requestAnimationFrame(animate)
}
animate()
