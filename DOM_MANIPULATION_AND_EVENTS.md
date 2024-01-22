Lesson Overview
 * Explain what the DOM is in relation to a webpage
 * Explain the difference between a node and an element
 * Explain how to target nodes with selectors
 * Explain the basic methods for finding/adding/removing and altering DOM nodes
 * Explain the difference between a nodelist and an array of nodes
 * Explain what bubbling is and how it works

DOM - Dcoument Object Model
 - The DOM is a tree-like representation of the contents of a webpage - a tree of nodes with different relationships depending on how they're arranged in the HTML document
  
  <div id="container">
    <div class="display"></div>
    <div class="controls"></div>
  </div>

 - In the above exmaple, the <div class="display"></div> is the child of <div class="container"></div> and the sibling of <div class="controls"></div>

Targeting nodes with selectors
 - When working with the DOM, you use "selectors" to target the nodes you want to work with
 - You use a combination of CSS-style selectors and relationship properties to target the nodes you want
 - In the above example, you could use the following selectors to refer to <div class="display"></div>
  - div.display
  - .display
  - #container > .display
  - div#container > div.display
  - You can also use relational selectors (i.e. firstELementalChild or lastElementChild) with special properties owned by the nodes

   const container = document.querySelector('#container');
   // selects the #container div (don't worry about the syntax, we'll get there)

   console.dir(container.firstElementChild);                      
   // selects the first child of #container => .display

   const controls = document.querySelector('.controls');   
   // selects the .controls div

   console.dir(controls.previousElementSibling);                  
   // selects the prior sibling => .display

DOM methods
 - When your HTML code is parsed by a web browser, it is converted to the DOM as was mentioned above
 - One of the primary differences is that these nodes are objects that have many properties and methods attached to them
 
 Query selectors
  - element.querySelector(selector) returns a reference to the first match of selector
  - element.querySelectorAll(selectors) returns a nodelist containing references to all of the matches of the selectors
  - It is important to note that when using querySelectorAll, the return value is not an array; it is a nodelist
   - The big distinction is that several array methods are missing from nodelists
   - If problems arise, you could convert the nodelist into an array by using Array.from() or using the spread operators

 Element Creation
  - document.createElement (tagName, [options]) - creates a new element of tag type tagName
   - options means you could add optional parameters of the function

   const div = document.createElement('div');

    - This function does not mean you can create new elements into the DOM - it simply creates it in memory
     - This makes it so that you can manipulate the element (adding styles, classes, ids, text, etc.) before placing it on the page

 Append elements
  - parentNode.appendChild(childNode) - appends childNode as the last child of parentNode
  - parentNode.insertBefore(newNode, referenceNode) - inserts newNode into parentNode before referenceNode

 Remove elements 
  - parentNode.removeChild(child) - removes child from parentNode on the DOM and returns a reference to child

 Altering elements
  - When you have a reference to an element, you can use that reference to alter the element's own properties
   - You can add/remove, alter attributes, changing classes, adding inline style information and more

   cont div = document.createElement('div');
   // creates a new div referenced in the variable 'div'

 Adding inline style
  div.style.color = 'blue';
  //adds the indicated style rule

  div.style.cssText = 'color: blue; background: white;
  //adds several style rules

  div.setAttribute('style', 'color: blue; background:white;');
  //adds several style rules

 - If you are accessing a kebab-cased CSS rule from JS, you'll either need to use camelCase or you'll need to use bracket notation instead of dash notation

  div.style.background-color //does not work
  div.style.backgroundColor //accesses the div's background-color style
  div.style['background-color] //also works
  div.style.cssText = "background-color: white" // sets the div's background color by assigning a CSS string

 Editing attributes
  
  div.setAttributes('id', 'theDiv');
  //if id exists, update it to 'theDiv', else create an id with value "theDiv"

  div.getAttribute('id')
  //returns value of specified attribute, in this case "theDiv"

  div.removeAttribute('id')
  //removes specified attribute

 Working with classes

  div.classList.add('new');
  //adds class "new" to your new div

  div.classList.remove('new');
  //removes "new" class from div

  div.classList.toggle('active')
  //if div doesn't have class "active" then add it, or if it does, then remove it

  - it is standard to toggle a CSS style rather than adding and removing inline CSS

 
  Adding text content
  
  div.textContent = 'Hello World'
  //creates a text node containing "Hello World" and inserts it into a div

  Adding HTML content
  
  div.innerHTML = '<span>Hello World!</span>;
  //renders the HTML inside div

REVIEW
 - Example of creating and appending a DOM element to a webpage

 <!-- HTML FILE -->
 <body>
  <h1>
    The Title of your Webpage
  </h1>
  <div id="container"></div>
<body>

 //JS file
 const conatiner = document.querySelector('#container');

 const content = document.createElement('div');
 content.classList.add('content');
 content.textContent = 'This is the glorious text-content!';

 container.appendChild(content);

  - In the JS file, first we get a reference to the container div that already exists in our HTML. Then we create a new div and store it in the variable content. We add a class and some text to the content div and fianlly append that div to container. After the JS code is run, our DOM tree will look like this:
 <!-- DOM -->
 <body>
  <h1>
    Tht Title of your Webage
  </h1>
  <div id="container">
    <div class="content">
      This is the glorious text-content!
    </div>
  </div>
</body>

 - The JS file does not alter the HTML, but the DOM - your HTML file will look the same, but the JS changes what the browser renders