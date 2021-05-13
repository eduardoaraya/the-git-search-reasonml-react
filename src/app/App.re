include Actions;
[@react.component]
let make = () => {
  let logoBg = "
  center 
  center 
  no-repeat
  url('src/assets/logo-bg.png')";
let resultBg = "
  center 
  center/cover
  no-repeat
  fixed
  url('src/assets/result-bg.png')";
  let (state, dispatch) = React.useReducer(Actions.reducer, Actions.initialState);
  let (bodyStyle, setBodyStyle) = React.useState(() => logoBg);
  React.useEffect1(() => Some(() => setBodyStyle(_ => resultBg)), [|state.cards|]);
  <div>
  <div className="body-wrapper" style=(ReactDOM.Style.make(~background=bodyStyle,()))>
    <Header dispatch/>
    <Modal state dispatch/>
    <div className="content">
        <List dispatch cards={state.cards}/>
    </div>
  </div>
  <footer className="d-flex center align-center">
    <a href="https://github.com/eduardoaraya" target="_blank">{React.string("Developer by eduardoaraya")}</a>
  </footer>
</div>
};