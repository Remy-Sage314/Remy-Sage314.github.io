import MarkdownIt from "markdown-it";

import AnimatedLink from "./animated-link.ts";

export function config(md: MarkdownIt) {
    md.use(AnimatedLink)
}
