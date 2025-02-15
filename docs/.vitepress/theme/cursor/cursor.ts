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
        cx += (tx - cx) * k
        cy += (ty - cy) * k
        cr.style.left = `${cx}px`
        cr.style.top  = `${cy}px`

        requestAnimationFrame(animate)
    }
    animate()
}
