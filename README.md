# Next/apollo LUSH poc

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) (CNA).

## Getting up and running

First, run install:

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the _amazing_ results.

### Linting and formating

To get everything uniformly formatted [prettier](https://www.npmjs.com/package/prettier) package was added. Eslint is bootstrapped with CNA, so get prettier to play nice with Eslint, the [eslint plugin prettier](https://www.npmjs.com/package/eslint-plugin-prettier) package was installed.

### Data access

Both [apollo-client](https://www.npmjs.com/package/@apollo/client) & [graphql](https://www.npmjs.com/package/graphql) were added to help with data access for the statically rendering pages from your [Sandboxed staging GraphQL playground](https://twstg2.eu.saleor.cloud/graphql/).

### Rendering

To render the description fields from GraphQL product data [https://www.npmjs.com/package/html-react-parser](html react parser) was installed.

### CSS

CSS modules is bootstrapped with CNA allowing easy local scoping of styles, to keep things DRY and share common break points [https://www.npmjs.com/package/postcss-modules-values](postcss modules values) was installed.

### Testing

Not really my strong point but to get the components snap shotted and test for null data I installed [https://www.npmjs.com/package/jest](jest) as a test runner and [https://www.npmjs.com/package/react-test-renderer](react test renderer) for tests. With more time I would have implemented unit and integration testing with https://www.npmjs.com/package/@testing-library/react](React testing library)....

### Other commands

Get the dev server running with node debugging enabled for development of server side rendering code.

```bash
yarn dev
```

Runs prettier "prettier --write ." with hard overwrites and save, safer not to use TBH and set up format on save in your IDE, like I did in VS Code.

```bash
yarn format
```

Runs Jest with a watch so test rerun on code and test file saves.

```bash
yarn test
```

Runs the previous command but adds flags to update snapshots and run coverage report.

```bash
yarn test:cu
```

Any questions please [email me!](mailto:peterdavidhenry@gmail.com)
