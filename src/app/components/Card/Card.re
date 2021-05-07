[@react.component]
let make = () => {
    <div style=(
        ReactDOM.Style.make(
            ~margin="10px",
            ~width="200px",
            ~height="273px",
            ~background="#FFF",
            ~boxShadow="0px 0px 6px rgba(47, 37, 68, 0.25)",
            ~borderRadius="10px", ()))>
    </div>
}