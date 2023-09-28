// innerText can modify the HTML put it will not show the hidden or all text like text content. It will show the literal text so dont add html elements when modifying.
//textContent will show the all and hidden html elements.

// Both InnerText and TextContent will modify the html element.

//InnerHTML will give up the markup within that element. You can modify using html element.
// If you want to add an additional HTML element after innerHTMl use the += and it will add that element to the already existing one.

// const allLinks = document.querySelectorAll('a');

// for (link of allLinks) {
//   link.innerText = 'I AM A LINK!';
// }

// Attributes

//original
// img id = banner
// document.querySelector('#banner').id = 'whoops";
// to change the id back to the original
// document.querySelector('#whoops').id = 'banner';

//getAttribute
//document.querySelector('HTML ELEMENT').getAttribute('href, id, title')
// it will print out the attribute that you want.

// setAttribute()
//can also set the Attribute by setAttribute('href, id, title, 'name or link you want the attribute'')
