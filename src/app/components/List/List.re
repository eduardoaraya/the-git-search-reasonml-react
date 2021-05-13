include Actions;
[@react.component]
let make = (~cards: array(Actions.user), ~dispatch) => {
  <div className="d-flex wrapper" id="card-list" style=(
      ReactDOM.Style.make(
        ~width="100%",
        ~padding="35px 0px",
        /* ~justifyContent="center", */
        ~margin="0 auto", ()))>
        { 
          cards
            ->Belt.Array.map((card) => {
              <Card key={Belt.Int.toString(card.id)} dispatch card/>
            })->React.array
        }
  </div>
}