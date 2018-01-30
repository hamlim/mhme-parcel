let component = ReasonReact.reducerComponent("Todo");

type action = Update | Add;

type todo = {
  title: string,
  completed: bool
};

type state = {
  value: string,
  todos: list(todo)
};

let str = ReasonReact.stringToElement;

let make = {
  ...component,
  initialState: () => {
    todos: [{title: "Finish this component", completed: false}],
    value: ""
  },
  reducer: (action, state) => 
    switch (action) {
    | Update(task) => ReasonReact.update({...state, value: task})
    | Add => ReasonReact.update({...state, todos: [{title: state.value, completed: false}, ...state.todos], value: ""})
    },
  render: (self) => {
    let value = self.state.value;
    <div>
      <input
        value=value
        onChange={event => self.send(Update(event.target.value))}
      />
      <button
        onClick={_event => self.send(Add)}
      >
        {str("Update Todo")}
      </button>
      <ul>
        {ReasonReact.arrayToElement(Array.of_list(List.map(todo => <li>{str(todo)}</li>, self.state.todos)))}
      </ul>
    </div>
  }
};

let todo = ReasonReact.wrapReasonForJs(~component, (_jsProps) => make([||]));