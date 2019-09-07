# random-name

Generate a random name from a list of over 277,000 names

## Install

`npm install @thomaschaplin/random-name --save`

## Usage

### ES5

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