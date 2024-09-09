# DOM

HTML DOM (Document Object Model) programming is a way to interact with and manipulate the structure and content of web pages using JavaScript. The DOM represents the structure of an HTML document as a tree of objects, where each node in the tree corresponds to a part of the document, such as an element, attribute, or text.

### Basic Concepts

1. **DOM Structure**:
   - **Document**: The entire HTML document.
   - **Element Nodes**: Represent HTML elements (e.g., `<div>`, `<p>`, `<a>`).
   - **Text Nodes**: Contain the text inside elements.
   - **Attribute Nodes**: Represent attributes of elements (e.g., `id`, `class`).

2. **Accessing Elements**:
   - **By ID**: `document.getElementById('elementId')`
   - **By Class Name**: `document.getElementsByClassName('className')`
   - **By Tag Name**: `document.getElementsByTagName('tagName')`
   - **By Query Selector**: `document.querySelector('selector')` or `document.querySelectorAll('selector')`

3. **Manipulating Elements**:
   - **Change Content**: `element.innerHTML` or `element.textContent`
   - **Change Attributes**: `element.setAttribute('attr', 'value')` or `element.getAttribute('attr')`
   - **Change Style**: `element.style.property = 'value'`
   - **Add/Remove Classes**: `element.classList.add('class')` or `element.classList.remove('class')`

4. **Creating and Appending Elements**:
   - **Create Elements**: `document.createElement('tagName')`
   - **Append Elements**: `parentElement.appendChild(newElement)`

5. **Event Handling**:
   - **Add Event Listeners**: `element.addEventListener('event', function)`
   - **Remove Event Listeners**: `element.removeEventListener('event', function)`

### Example

Here's a simple example to illustrate these concepts:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Example</title>
</head>
<body>
    <h1 id="header">Hello, World!</h1>
    <button id="changeTextButton">Change Text</button>
    <button id="addElementButton">Add Element</button>

    <script>
        // Accessing the header element by ID
        const header = document.getElementById('header');

        // Adding an event listener to change the header text when the button is clicked
        document.getElementById('changeTextButton').addEventListener('click', function() {
            header.textContent = 'Text Changed!';
        });

        // Adding a new paragraph element to the body when the button is clicked
        document.getElementById('addElementButton').addEventListener('click', function() {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = 'This is a new paragraph!';
            document.body.appendChild(newParagraph);
        });
    </script>
</body>
</html>
```

In this example:
- We have an `<h1>` element and two buttons.
- When the "Change Text" button is clicked, the text of the `<h1>` element is changed.
- When the "Add Element" button is clicked, a new `<p>` element is created and added to the document.

