// Write your code here!
const main = document.querySelector('#main');
main.remove();


const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'Will is the champion'
document.querySelector('body').append(newHeader)
