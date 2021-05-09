include ApiGithub;
[@react.component]
let make = (~setData) => {
  let (text, setText) = React.useState(() => "");
  /* React.useEffect0(() => Some(() => setData(_ => [||])); */
  let handleClick = _ => {
    let _ = ApiGithub.handleSearch(text, setData);
  };
  <header className="header">
    <div className="header-area d-flex row align-center">
      <div className="logo-header" style=(ReactDOM.Style.make(~width="75px", ~marginRight="25px", ()))>
        <img src="src/assets/logo.svg" width="100%" alt="logo"/>
      </div>
      <div className="d-flex row" style=(ReactDOM.Style.make(~flex="1", ()))>
        <input type_="text" onChange={
          event => {
            let value = ReactEvent.Form.target(event)##value;
            setText(_ => value)
          }
        } name="name"/>
        <button
          className="btn"
          onClick=handleClick
          style=(
            ReactDOM.Style.make(
              ~padding="7px",
              ~width="36px",
              ~height="36px",
              ~transform="translate3d(-22px,0,0)",
              ~boxShadow="-2px 0px 4px rgba(0, 0, 0, 0.25)",
              ~borderRadius="0px 4px 4px 0px", ()))>
              <img src="src/assets/search.svg" width="100%" alt="logo"/>
            </button>
      </div>
    </div>
  </header>
};
