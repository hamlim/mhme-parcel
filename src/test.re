let echo = (input: string): string => "Hello " ++ input;

let component = ReasonReact.statelessComponent("Greeting");

let make = (~name, _children) => {
  ...component,
  render: (_self) => (
    <div>
      {ReasonReact.stringToElement("Hello " ++ name)}
    </div>
  )
};

let greeting = ReasonReact.wrapReasonForJs(~component, (jsProps) => make(~name=jsProps##name, [||]));