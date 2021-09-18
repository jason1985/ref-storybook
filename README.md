# Storybook Reference
This repo is just a reference for using Storybook & also how to deploy Storybook to GitHub Pages
## Storybook setup
- install with: `npx sb init`
- start with: `npm run storybook`

## How to deploy Storybook to GitHub Pages
install with: `npm i @storybook/storybook-deployer --save-dev`

Then add a NPM script and "homepage" to **`package.json`**
```js
{
  "homepage": "https://jason1985.github.io/ref-storybook",
  "scripts": {
    "deploy-storybook": "storybook-to-ghpages"
  }
}
```
deploy with: `npm run deploy-storybook`
## This repo is deployed @ https://jason1985.github.io/ref-storybook
