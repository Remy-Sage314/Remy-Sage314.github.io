import './cursor.sass'

if (!import.meta.env.SSR) {
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
        // ↑ 鼠标移入/移出元素时 修改样式 判断是否切换为 active
        if (e.target instanceof HTMLElement) {
            const t = e.target
            const s = window.getComputedStyle(t)
            const c = s.getPropertyValue("--custom-cursor-ring")
            if (c === "active") cr.classList.add('active')
            else cr.classList.remove('active')
        }
    }

    function animate() {
        const k = 0.35
        cx += (tx + window.scrollX - cx) * k
        cy += (ty + window.scrollY - cy) * k

        const cs = window.getComputedStyle(cr)
        const sx = parseInt(cs.width.slice(0, -2)) / 2
        const sy = parseInt(cs.height.slice(0, -2)) / 2
        if (!isNaN(sx) && !isNaN(sy)) {
            cx = Math.max(cx-sx, 0) + sx
            cy = Math.max(cy-sy, 0) + sy
            cx = Math.min(cx+sx, window.innerWidth + window.scrollX) - sx
            cy = Math.min(cy+sy, window.innerHeight + window.scrollY) - sy
        }

        cr.style.left = `${cx}px`
        cr.style.top  = `${cy}px`

        requestAnimationFrame(animate)
    }
    animate()


    document.addEventListener('mousedown', () => {
        cr.classList.add('down')
    })
    document.addEventListener('mouseup', () => {
        cr.classList.remove('down')
    })
}
