[@react.component]
let make = (~cards) => {
  <div className="d-flex wrapper" style=(
      ReactDOM.Style.make(
          ~width="100%",
          ~paddingTop="35px", ()))>
      {
        cards
          ->Belt.Array.map((card) => <Card key=card##id card/>)
          ->React.array
      }
  </div>
}