
<ins>Warning: This article is VERY dry, don't read on unless you are using it as a quick reference/resource!</ins>


CSS is oddly one of the most complex syntaxes that exist in the web development world simply because of how unique it is when compared to languages like Javascript and PHP. This article I wanted to dive into the pseudo classes, elements and selectors and give a fairly brief overview of them for those who are just starting to dive into CSS.


CSS has two instances of pseudo selectors in the language, the first is pseudo classes and the second is pseudo elements. This article is going to be broken into two sections covering every pseudo selector that is available (even the ones that aren't in browsers yet[^1]).


The difference between the pseudo classes and the pseudo elements are what they actually are in the browser. Pseudo elements act as elements in the DOM, pseudo classes on the other hand act, you guessed it, just like classes! Pseudo classes can simply be thought of as toggleable classes on an element when a specific action happens related to the element, like `:hover`.


```html
<div>::before content in the div ::after</div>
```
<section>
<h3>Pseudo Classes:</h3>

Pseudo classes act like toggleable states on elements, they only style the targeted element when a specific event is active or has occurred. These classes allow CSS authors to style elements based on the element's state which is something that would previously only be possible within Javascript.


A lot of amazing innovations in CSS and HTML have happened because of neat tricks with these pseudo classes, the most common example is the Checkbox Hack, wherein a checkbox is wrapped in a label and then hidden, this offers a simple way to toggle states on an element. Many web developers have used this trick to build entire user experience paradigms that previously required a ton of Javascript.


Below is a list of all the current Pseudo classes within the CSS specification, some (marked with the red light 🚨) are currently still in an experimental state and may not be implemented in your current browser.


`:active`

This class matches an element when it is activated by the user, typically this is between the `onmousedown` event and the `onmouseup` event (note it should only match the primary or left click event for right hand mice). It also matches when a uses the tab key to an element.

🚨`:any()`

This class was a prior implementation of the `:matches()` selector in both Firefox and Webkit browsers. If you need to use this functionality refer to `:matches` below.

`:checked`

This class selects any radio, checkbox, or option in a select element that is currently checked. This is popularly used for what I described above as the "Checkbox Hack".

`:default`

This class selects the default value for any user interface element out of a group of similar elements. This can select one or many elements that are the default.

🚨`:dir()`

This class selects elements based on their text direction. `:dir(rtl) | :dir(ltr)` this is slightly different from the `[dir="..."]` attribute selector, yet is only fully supported in Firefox 49 currently.

`:disabled`

This class selects any disabled element, and is mostly used for styling input's and buttons.

`:empty`

This class selects all elements that are empty of any content including whitespace, see `:blank` below for selecting empty elements include elements that only contain whitespace.

`:enabled`

This class selects any enabled element, an element is enabled if it can be activated, or if it can accept focus.

`:first`

This class selects the first page of a document when printing, you can only change margins, orphans, widows and page-breaks within this selector.

`:first-child`

This class selects the first child of the parent node.

`:first-of-type`

This class is similar to the above however it selects every first instance of a new unique element within the parent node. If you have a div  with the following elements: (1) span, (2) em (3) span (4) span and (5) strike, this selector will select the elements: 1, 2, and 5.

`:fullscreen`

This selects any element that is currently being displayed in fullscreen and all it's children so you can do the following: `div:fullscreen > h1 { ... }`.

`:focus`

This class selects the current element that has recieved focus either from the keyboard or when the user is selecting it via the mouse.

`:hover`

This selects any element that the mouse cursor is currently hovering over. Please note that this shouldn't be used to dramatically hide/show content on a page because it is basically meaningless to a touch screen device without a mouse.

`:indeterminate`

This selects any checkbox who has had it's `indeterminate` attribute set to true, a group of radio buttons where none are selected or a progress element that has an indeterminate value.

`:in-range`

This selects an element that has it's value attribute within the specified maximum and minimum values.

`:invalid`

This class selects an input or a form whose content fails to validate (i.e. an input type="email"'s value is 'test')

`:lang()`

This selects elements based on the language the element is determined to be in.

`:last-child`

This selects the last child element within a parent container, essentially the opposite of `:first-child`.

`:last-of-type`

This selects the last element element with the given element name within the parent node, it acts recursively, and is used like `div em:last-of-type { ... }` where that selects the last elements of name em within the div and within node trees inside the div.

`:left`

This matches any left page when printing a page, you can only change margin, padding, border, and background. This also is determined by the direction of the language, so if the language were right to left technically it would select the right-hand-side page.

`:link`

This selects all elements within the scope element. Make sure to follow the following LVHA rule, style links in order of `:link` -> `:visited` -> `:hover` -> `:active` to make sure you don't override styles.

`:not()`

This matches any scope that does not match the selectors within the parenthesis. Note, only recently did they update the spec to support a comma-sperated list of selectors and not all browsers support that so make sure to chain the selector for matching elements that don't match several different selectors.

`:nth-child()`

This selects the `an+b | even | odd`'th child within the scope. where a and b are integers. This can be used to do some really amazing stuff like making a CSS only randomizer using this selector and the Cicada Principle, <a href="https://www.lottejackson.com/learning/nth-child-cicada-principle" data-css-link-article>Read more here</a>.

`:nth-last-child()`

This is essentially the same as above but searches the parent node from bottom to top.

`:nth-last-of-type()`

This is similar to `:last-of-type` above but also matches for a pattern similar to `:nth-child`.

`:nth-of-type()`

This is similar to the above selector but starts at the top of the scope context.

`:only-child`

This selects all elements that are the only child of their parent node.

`:only-of-type`

This matches the same above but for a specific element type.

`:optional`

This selects all input elements that do not have the required attribute set on them.

`:out-of-range`

This selects an element that has it's value attribute that is outside the range of values between the minimum and maximum values.

`:read-only`

This selects any element that is not writable by the user.

`:read-write`

This selects any elements that are writable by the user such as an input or textarea, and even elements that are contenteditable.

`:required`

This selects input elements that have the required attribute.

`:right`

This is similar to the `:left` selector except it selects the right-hand-side pages when printing a document.

`:root`

This selects the root node for the context, for HTML this targets the `<html>` element and has a higher specificity than the `html { ... }` selector.

🚨`:scope`

This selects scoped style elements within an HTML document, if none are specified it selects the HTML element.

`:target`

This selects the element that is targeted by the url. This is commonly used for styling an ID that has been linked to. Currently you can only target ID's even though the CSS spec has an example of it being applied to a class on a p element.

`:valid`

This selects a form or input whose value validates correctly.

`:visited`

This targets all anchor tags that have been previously visited by the user. Because of privacy concerns you can only change the following on visited anchor tags: color, background-color, border-color, border-\*-color, outline-color, column-rule-color, fill and stroke. Though the color can be changed, the method `getComputedStyle` will lie and always give back the value of the non-visited color.

🚨`:any-link`

This selects all elements that match `:link` or `:visited`.

🚨`:local-link`

This selects links that point to the current domain that the page is on.

🚨`:active-drop-target`

This selects all input type="file" elements that are active.

🚨`:valid-drop-target`

This selects all input type="file" elements whose input file is validated.

🚨`:invalid-drop-target`

This selects all input type="file" elements whose input file can't be validated.

🚨`:current`

This is where it gets odd, this selects the element or an ancestor of the element that is currently being displayed, it can also take in an argument of comma-seperated selectors or compound selectors to match elements that are currently being read out loud in a speech rendering of the document.

🚨`:past`

This is the same as the above selector except for elements that have previously been read out by a speech rendering of the document. (all elements up until the :current element)

🚨`:future`

This selects all elements to be read out after the :current element.

🚨`:placeholder-shown`

This selector matches an input element that is showing such placeholder text.

🚨`:user-error`

This selector must match an :invalid, :out-of-range, or blank-but-:required elements between the time the user has attempted to submit the form and before the user has interacted again with the form element.

🚨`:blank`

This selector is similar to `:empty` but also matches for whitespace only between the opening and closing tags of an element.

🚨`:nth-match()`

This selects the nth element that matches the selector passed into the parenthesis.

🚨`:nth-last-match()`

This selects the nth element (starting from the last node) that matches the selector passed into the parenthesis.

🚨`:nth-column()`

This selector is similar to `:nth-child` except matches all cells within the column.

🚨`:nth-last-column()`

This selector is similar to above except starts it's search from the last node within the parent and matches all cells within the column.

🚨`:matches`

This selector targets any compound selector that literally matches the selectors within the parenthesis of the selector. (ex. `p :matches(em, ins, s) { ... }` will select any em tag, ins tag or s tag within a p tag.)


Stay tuned for part two where I will cover pseudo elements and some of their use cases!

----
#### Footnotes:
[^1]:At the time of writing at least.
