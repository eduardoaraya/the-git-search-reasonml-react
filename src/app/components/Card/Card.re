[@react.component]
let make = () => {
    <div style=(
        ReactDOM.Style.make(
            ~margin="12px",
            ~minWidth="230px",
            ~height="273px",
            ~background="#DDD", ()))>
        {React.string("Card")}
    </div>
}