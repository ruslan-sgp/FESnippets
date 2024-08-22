import { m2 } from './module2.js'

function m1() {
    let newElement = document.createElement('p')
    newElement.innerText = 'Module 1'
    document.body.appendChild(newElement)
}

m1()
m2()