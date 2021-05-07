[@react.component]
let make = () => {
    <div className="d-flex wrapper" style=(
            ReactDOM.Style.make(
                ~width="100%",
                ~paddingTop="35px", ()))>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
}