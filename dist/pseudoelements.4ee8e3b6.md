Pseudo elements act as real dom nodes within the flow of a document only when they are specified within CSS. There are only a handful of them compared the the vast number of pseudo classes that exist within the CSS syntax, however there are a few new changes to CSS that are being worked on to allow web developers to extend these into their own custom pseudo selectors.


Below is a list of all the current Pseudo elements within the CSS specification, some (marked with the red light  🚨) are currently still in an experimental state and may not be implemented in your current browser.

`::before`

> This pseudo element gets appended within the element you select, before the text content or inner HTML content of that element. Note however that this will only work with elements that have a closing tag, so you can't yet use this selector with tags such as `<img />`. Some browsers allow this to work but it isn't standardized yet so best to not use this trick.

> In order to force the element to render in the dom, you need to define the content property: `content: ' ';`


`::after`

> This selector is the exact same as the
`:before` pseudo element above however it gets appended after the text or inner HTML content of the node you select. The same caveats apply for this selector as with above.


`::first-letter`

> This selector is a bit interesting in how it matches content. This selector allows you to style the first letter of the first line of a block of content if it is not preceeded by any other content. It also doesn't just grab the first letter, it will also select any punctuation before the first character, or any content within the
`:before` pseudo element. Some languages require capitalizing the first two characters of a word, this selector should work to select the first two characters should the language of the document require that however this isn't widely supported in browsers.


`::first-line`

> This selector applies styles to the first line of an element. It also only matches content within an element that has the
`display` property set to one of the following: block, inline-block, table-cell or table-caption. You are also limited in what kind of properties that can be modified within this selector.


`::selection`

> This selector allows you to apply styles to any text the user has highlighted with a mouse or another pointing device. Again only a small subset of properties can be modified within this selector and these are: color, background-color, cursor, outline, text-decoration, text-emphasis-color, text-shadow.

 🚨`::backdrop`

> This pseudo element exists between the element on the top layer of the stack of elements and any elements beneath the element on the top layer of the stack. It can be used to hide content behind the element that is in the top layer currently. This isn't widely supported yet so be careful with where you use it.

 🚨`::placeholder`

> This pseudo element allows web developers to style any placeholder text within form elements. Please note that the same restrictions on what properties can be styled with the `::first-line` element also apply here.

 🚨`::marker`

> This is a very experimental pseudo element, support on browsers is fairly unknown at this point in time so I would hold off on using this in any project until some research is done in this area. This should allow developers to select the marker box of a list item (i.e. the bullet point or number).

 🚨`::spelling-error`

> This element represents a text segment that the browser has flagged as being incorrectly spelled. Only a small subset of properties can be used with this selector including: color, background-color, cursor, outline, text-shadow, text-decoration, and text-emphasis-color.

 🚨`::grammar-error`

> This element is similar to the above `::spelling-error` pseudo element however it represents a text segment that the browser has flagged for having a grammatical error. The same restrictions exist on this selector as above.


One common question that many new CSS developers ask is what is the difference between using a single colon before the pseudo elements above and double colon. The reason as to why both exist is because in the CSS 2 specification both pseudo elements and pseudo classes used a single colon, however in the CSS 3 specification the W3C working group decided change pseudo elements to the double colon syntax to signify the difference between elements and classes.
