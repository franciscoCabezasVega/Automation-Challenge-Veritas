
# Automation Challenge - Veritas

This project is a challenge from Veritas, to demonstrate automation skills. It is written in JavaScript and uses the following packages: 

* [@cucumber/cucumber](https://www.npmjs.com/package/@cucumber/cucumber) 
* [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) 
* [chromedriver](https://www.npmjs.com/package/chromedriver) 
* [nightwatch](https://www.npmjs.com/package/nightwatch) 

### Optional installation

- You can optionally install lockgit from: https://github.com/jswidler/lockgit

## Environment Variables

To run this project, you will need to add the .env file to the project or open it with:

```bash
    lockgit set-key PBVFYCGNJM45BYYTUCWSRVFCNZSJFGMQOXB2566I6OWGIGZWK35Q
```

```bash
    lockgit open
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/franciscoCabezasVega/Automation-Challenge-Veritas.git
```

Go to the project directory

```bash
  cd Automation-Challenge-Veritas
```

Install dependencies

- Install proyect with npm (you can install nvm and configure npm version 8.15.0).

```bash
  npm install
```

## Running Tests

To run tests, run the following command

```bash
  npx nightwatch
```