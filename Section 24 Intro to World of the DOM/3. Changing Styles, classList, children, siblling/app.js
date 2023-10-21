const allLink = document.querySelectorAll('a');

// my own practice

/*
const linksInContent = document.querySelectorAll('span[class="toctext"]');

for (link of linksInContent) {
  link.style.color = 'red';
  link.style.textDecoration = 'underline';
}
*/

//end of my own practice

for (links of allLink) {
  links.style.color = 'rgb(0, 108, 134)';
  links.style.textDecorationColor = 'magenta';
  links.style.textDecorationStyle = 'wavy';
}

//window.getComputedStyle(HTML ELEMENT).'whatever style you put here' tells you exactly what the value of the CSS Property is.

//classList

//setAttribute can be used to set the class but if you setAttribute again it will override it the previous class.

// that is where classList comes in play
// you can add and remove and check for multiple class at once.

//syntax for add - VARIABLE.classList.add('class name')

//remove - variable.classList.remove('class name')

//contains - checks if that class in currently applied that element. Syntax is variable.classList.contains('class name')

//toggle - is basically a on and off to toggle the class. variableName.classList.toggle('class name');

// children elements allow you to see the HTML elements of the element you listed.
// ex paragraph.children will show the HTML collection
// parent element is variableName.parentElement.

//nextSibling and , nextElementSibling (previousSibling and previousElementSibling)
// nextSibling will show you the node list which we haven't covered but to show the actual nextSibling you use variableName.nextElementSibling.
