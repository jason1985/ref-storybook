# Storybook Reference
## Storybook setup
install `npx sb init` after running `create-react-app`
start `npm run storybook`

## Deploy Storybook to GitHub
`npm i @storybook/storybook-deployer --save-dev`
add to `package.json`
```
{
  "scripts": {
    "deploy-storybook": "storybook-to-ghpages"
  }
}
```


