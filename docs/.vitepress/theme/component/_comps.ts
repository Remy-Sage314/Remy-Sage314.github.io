import { App } from "vue";
export { component }

const glob = import.meta.glob('./**/*.vue', { eager: true })

const modules: Record<string, any> = {}
Object.keys(glob).forEach(key => {
    const name = key.split('/').pop()?.replace(/^([a-zA-Z]*)\.vue$/, '$1')
    if (!name) return
    modules[name] = glob[key]
})

function component(app: App) {
    for (const name in modules) {
        const comp: any = modules[name]
        app.component(name, comp.default)
    }
}
