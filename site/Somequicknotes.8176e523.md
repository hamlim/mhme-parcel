#### Some Quick Thoughts

```Javascript
const store = ( () => {
  let state;
  return todos => {
    if (todos) {
      state = todos;
      render("todo-list");
    }   
    return state;
  };  
})();

const render = (component, parent = document.body) =>
  parent.innerHTML = `<${component}></${component}>`;

customElements.define("todo-item", class extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({mode: "open"});
    root.innerHTML = `
      <label>
        <input type=checkbox>
        <slot></slot>
      </label>
    `;
    root.querySelector("input").addEventListener("click", () =>
      store(store().filter((todo, index) => index != this.index)));
  }

  static get observedAttributes() {
    return ["index"];
  }

  attributeChangedCallback(name, old, change) {
    this.index = change;
  }
});

customElements.define("todo-list", class extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({mode: "open"});
    root.innerHTML = `
      <ul>
        ${store().map((todo, index) => `
          <li>
            <todo-item index=${index}>
              ${todo}
            </todo-item>
          </li>
        `).join("")}
      </ul>
    `;
  }
});

```

A quick little snippet to make a todo list within your browser.

All you do is call:
```Javascript
store([array of tasks]);
```

I recently have been trying to follow more people on twitter who tweet screenshots of interesting code. So far I am saving them to a special 
screenshot folder.