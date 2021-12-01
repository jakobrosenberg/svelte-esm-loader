# ESM loader for Svelte

This project builds on the projects listed below

- https://github.com/jerrythomas/svelte-esm-loader
- https://github.com/brev/esm-loader-svelte

It adds support for running the loader programmatically. Ie. the loader can be extended with custom options:

```javascript
// my-custom-loader.js
import { svelteLoader } from "svelte-esm-loader/loader.js"

const { resolve, getFormat, getSource, transformSource } =
    await svelteLoader({/** options */})

export { resolve, getFormat, getSource, transformSource }
```

Additional options can be added as query strings on import:
```javascript
import SsrComponent from './Component.svelte?generate=ssr'
```

For a full list of options, please refer to svelte/compiler options
```typescript
// https://github.com/sveltejs/svelte/blob/master/src/compiler/interfaces.ts#L143-L171
export interface CompileOptions {
	format?: ModuleFormat;
	name?: string;
	filename?: string;
	generate?: 'dom' | 'ssr' | false;
	errorMode?: 'throw' | 'warn';
	varsReport?: 'full' | 'strict' | false;

	sourcemap?: object | string;
	enableSourcemap?: EnableSourcemap;
	outputFilename?: string;
	cssOutputFilename?: string;
	sveltePath?: string;

	dev?: boolean;
	accessors?: boolean;
	immutable?: boolean;
	hydratable?: boolean;
	legacy?: boolean;
	customElement?: boolean;
	tag?: string;
	css?: boolean;
	loopGuardTimeout?: number;
	namespace?: string;
	cssHash?: CssHashGetter;

	preserveComments?: boolean;
	preserveWhitespace?: boolean;
}
```

♥♥♥ and credit goes to [Brev Patterson](https://github.com/brev) and [Jerry Thomas](https://github.com/jerrythomas)
who respectively created and extended this project.
