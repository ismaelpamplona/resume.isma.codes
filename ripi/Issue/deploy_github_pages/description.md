# deploy_github_pages (Issue)

## related docs

- [https://www.okupter.com/blog/deploy-sveltekit-website-to-github-pages](https://www.okupter.com/blog/deploy-sveltekit-website-to-github-pages)
- [https://kit.svelte.dev/docs/adapter-static](https://kit.svelte.dev/docs/adapter-static)

## todo

- [x] read the docs above
- [x] Use the SvelteKit static adapter `npm add -D @sveltejs/adapter-static`
- [x] In the  svelte.config.js  file, we need to replace  `@sveltejs/adapter-auto`  with  `@sveltejs/adapter-static`
- [x] Set the base path:
  - ```json	
    kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/isma.codes' : '',
	    }
	}
- [x] Set `NODE_ENV` variable on `package.json` `build` script. From `"build": "vite build"` to `"build": "NODE_ENV=production vite build"`,
- [x] build `.github/workflows/deploy.yml` file
- [x] build `src/routes/+layout.js` file
- [ ] Setup the relative links in the project with the prefixed base path
- [x] On Github repositories > isma.codes > settings > pages
  - On branch section, select a branch source to enable GitHub Pages for this repository. In this case, select the same branch that you set on `deploy.yml` file
- [x] deploy on main branch