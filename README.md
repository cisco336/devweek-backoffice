## Installing all the dependencies of project
- In the terminal run: `npm install` or `yarn install` or `yarn`

## Setting up ESLint

Just run:
- `npm install --save-dev eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import`
- In the terminal run: `eslint --init` [video](https://www.youtube.com/watch?v=cMrDePs86Uo&t=479s)
- In the file `.eslintrc.js` change the extends to `'extends': 'airbnb'`
- You can create an npm script by adding something like this to your `package.json` file:
```
{
    "scripts": {
        "lint": "eslint app.js"
    }
}
```
- Then you can run ESLint by using `npm run lint` in the terminal.
- Other alternative could be execute ESLint Task, open the command palette from VS Code and execute below command: `Ctrl + Shift + p` and select `Task: Run tash, npm: lint`
- [documentation](http://shripalsoni.com/blog/configure-eslint-in-visual-studio-code/)

## Setting up EditorConfig

- [documentation](https://codeburst.io/setting-up-eslint-and-editorconfig-in-react-native-projects-31b4d9ddd0f6)

## Running the project

With npm:
- `npm start`
- `npm lint`

With yarn:
- `yarn start`

## Usage yarn

Adding a dependency:
- `yarn add [package]`

Upgrading a dependency:
- `yarn upgrade [package]`

Removing a dependency:
- `yarn remove [package]`

[documentation](https://yarnpkg.com/en/docs/usage)