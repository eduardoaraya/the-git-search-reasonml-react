[@react.component]
let make = () => {
    <header className="header">
        <div className="header-area d-flex row align-center">
            <div className="logo-header" style=(ReactDOM.Style.make(~width="130px", ~marginRight="25px", ()))>
                <img src="src/assets/logo.svg" width="100%" alt="logo"/>
            </div>
            <div className="d-flex row">
                <div>
                    <input type_="text" name="name"/>
                </div>
                <button>{React.string("Search")}</button>
            </div>
        </div>
    </header>
};
