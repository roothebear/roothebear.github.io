//Cycle through colours
const button = document.querySelector(".button")
const sectionToColour = document.querySelector(".wrapper-blue")
const colors = ['#1abc9c', 'pink', '#28395f']

sectionToColour.style.backgroundColor = '#28395f'
button.addEventListener('click', changeBackground)

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    sectionToColour.style.backgroundColor = colors[colorIndex]
}


function myFunction() {
    const colorIndexTwo = parseInt(Math.random() * colors.length)
    document.querySelector(".buttontwo").style.backgroundColor = colors[colorIndexTwo];
}



