[@react.component]
let make = (~cards) => {
  <div className="d-flex wrapper" style=(
      ReactDOM.Style.make(
          ~width="100%",
          ~padding="35px 0px", ()))>
      {
        cards
          ->Belt.Array.map((card) => <Card key=card##id card/>)
          ->React.array
      }
  </div>
}