let component = ReasonReact.statelessComponent("Example");

let make = (_children) => {
  ...component,
  render: (_self) => (
    <div>
      {ReasonReact.stringToElement("Testing Composition")}
    </div>
  )
};


let example = ReasonReact.wrapReasonForJs(~component, (_jsProps) => make([||]));