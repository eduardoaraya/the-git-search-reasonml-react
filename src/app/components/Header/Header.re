[@react.component]
let make = () => {
    <header className="header">
        <div className="header-area d-flex row align-center">
            <div className="logo-header" style=(ReactDOM.Style.make(~width="75px", ~marginRight="25px", ()))>
                <img src="src/assets/logo.svg" width="100%" alt="logo"/>
            </div>
            <div className="d-flex row" style=(
                ReactDOM.Style.make(
                    ~flex="1", ()))>
                <input type_="text" name="name"/>
                <button
                    style=(
                        ReactDOM.Style.make(
                            ~padding="7px",
                            ~width="36px",
                            ~height="36px",
                            ~transform="translate3d(-22px,0,0)",
                            ~background="#8C56C2",
                            ~boxShadow="-2px 0px 4px rgba(0, 0, 0, 0.25)",
                            ~borderRadius="0px 4px 4px 0px", ())
                    )><img src="src/assets/search.svg" width="100%" alt="logo"/></button>
            </div>
        </div>
    </header>
};
