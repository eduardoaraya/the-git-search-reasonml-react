[@react.component]
let make = () => {
    <div>
        <Header/>
        <div className="content">
            <List/>
        </div>
        <footer className="d-flex center align-center">
            {React.string("copyrights")}
        </footer>
    </div>
};