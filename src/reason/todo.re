let valueFromEvent = (evt) : string => (
  evt
  |> ReactEventRe.Form.target
  |> ReactDOMRe.domElementToObj
)##value;

let str = ReasonReact.stringToElement;

type todo = {
  title: string,
  completed: bool
};

module TodoItem = {
  let component = ReasonReact.statelessComponent("TodoItem");
  let make = (~todo, _children) => {
    ...component,
    render: (_self) =>
      <li className="item">
        /* <input
          _type="checkbox"
          checked=(Js.Boolean.to_js_boolean(item.completed))
          /* TODO make interactive */
        /> */
        (str(todo.title))
      </li>
  };
};

type state = {
  value: string,
  todos: list(todo)
};

type action = Update(string) | Add;
let component = ReasonReact.reducerComponent("Todo");

let make = (_children) => {
  ...component,
  initialState: () => {
    todos: [{title: "Finish this component", completed: false}],
    value: ""
  },
  reducer: (action, state) => 
    switch (action) {
    | Update(task) => ReasonReact.Update({...state, value: task})
    | Add => ReasonReact.Update({todos: [{title: state.value, completed: false}, ...state.todos], value: ""})
    },
  render: (self) => {
    let value = self.state.value;
    <div>
      <input
        value=value
        onChange={event => self.send(Update(valueFromEvent(event)))}
      />
      <button
        onClick={_event => self.send(Add)}
      >
        {str("Add Todo")}
      </button>
      <ul>
        {List.map(todo => <TodoItem todo />, self.state.todos) |> Array.of_list |> ReasonReact.arrayToElement}
      </ul>
    </div>
  }
};

let todo = ReasonReact.wrapReasonForJs(~component, (_jsProps) => make([||]));