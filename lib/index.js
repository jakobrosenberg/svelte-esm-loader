
import { svelteLoader } from "./loader.js"

const { resolve, getFormat, getSource, transformSource } =
    await svelteLoader(/** options */)

export { resolve, getFormat, getSource, transformSource }