import './cursor.sass'

if (!import.meta.env.SSR) {
    const box = document.createElement('div')
    const cr = document.createElement('div')
    box.classList.add('cursor-ring-box')
    cr.classList.add('cursor-ring', 'visually-hidden')
    box.appendChild(cr)
    document.body.appendChild(box)

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

    // 当鼠标移出页面时 隐藏 ring
    document.addEventListener('mouseout', (e) => {
        if (e.relatedTarget === null) ringHide()
    })

    function ringAppear() { cr.classList.remove('visually-hidden') }
    function ringHide() { cr.classList.add('visually-hidden') }

    document.addEventListener('pointerdown', (e) => {
        switch (e.pointerType) {
            case 'mouse':
                cr.classList.add('down')
                ringAppear()
                break

            case 'pen':
            case 'touch':
                ringHide()
                break
        }
    })

    document.addEventListener('pointerdown', (e) => {
        switch (e.pointerType) {
            case 'mouse':
                cr.classList.add('down')
                ringAppear()
                break

            case 'pen':
            case 'touch':
                ringHide()
                break
        }
    })

    document.addEventListener('pointermove', (e) => {
        switch (e.pointerType) {
            case 'mouse':
                ringAppear()
                break

            case 'pen':
            case 'touch':
                ringHide()
                break
        }
    })
}
