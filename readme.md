# random-name

![npm (scoped)](https://img.shields.io/npm/v/@thomaschaplin/random-name)
[![GitHub issues](https://img.shields.io/github/issues/thomaschaplin/random-name)](https://github.com/thomaschaplin/random-name/issues)
[![GitHub forks](https://img.shields.io/github/forks/thomaschaplin/random-name)](https://github.com/thomaschaplin/random-name/network)
[![GitHub stars](https://img.shields.io/github/stars/thomaschaplin/random-name)](https://github.com/thomaschaplin/random-name/stargazers)
[![GitHub license](https://img.shields.io/github/license/thomaschaplin/random-name)](https://github.com/thomaschaplin/random-name/blob/master/LICENSE)

Generate a random name from a list of over 277,000 names

## Install

`npm i @thomaschaplin/random-name`

## Usage

### ES5

```js
const randomName = require('@thomaschaplin/random-name')

console.log(randomName.randomFirstName()) // thomas
console.log(randomName.randomLastName()) // chaplin
console.log(randomName.randomFullName()) // thomas chaplin
```

or

```js
const { randomFirstName, randomLastName, randomFullName } = require('@thomaschaplin/random-name')

console.log(randomFirstName()) // thomas
console.log(randomLastName()) // chaplin
console.log(randomFullName()) // thomas chaplin
```

### ES6

```js
import { randomFirstName, randomLastName, randomFullName } from '@thomaschaplin/random-name')

console.log(randomFirstName()) // thomas
console.log(randomLastName()) // chaplin
console.log(randomFullName()) // thomas chaplin
```

## License 

[MIT](./LICENSE)