'use strict'

const firstnames = require('./firstnames.json')
const lastnames = require('./lastnames.json')

exports.randomFirstName = function randomFirstName() {
    return firstnames[Math.floor(Math.random() * firstnames.length)]
}

exports.randomLastName = function randomLastName() {
    return lastnames[Math.floor(Math.random() * lastnames.length)]
}

exports.randomFullName = function randomFullName() {
    return `${firstnames[Math.floor(Math.random() * firstnames.length)]} ${lastnames[Math.floor(Math.random() * lastnames.length)]}`
}
