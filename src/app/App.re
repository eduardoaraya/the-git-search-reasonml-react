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

[@react.component]
let make = () => {
  let (listCards, setListCards) = React.useState(() => [||]);
  let (bodyStyle, setBodyStyle) = React.useState(() => logoBg);
  let resetModal = (): Modal.user => {
    {
      modal_opem: false,
      avatar: "",
      username: "",
      url: "",
      date: "",
      following: -1,
      followers: -1
    }
  };
  let (
    dataModal: Modal.user,
    setDataModal: (_) => unit 
  ) = React.useState(resetModal);
  React.useEffect1(() => Some(() => setBodyStyle(_ => resultBg)), [|listCards|]);
  <div>
  <div className="body-wrapper" style=(ReactDOM.Style.make(~background=bodyStyle,()))>
    <Header setData=setListCards />
    <Modal data=dataModal reset={ _ => setDataModal(_ => resetModal()) }/>
    <div className="content">
        <List cards=listCards dispatchViewMoreClick=setDataModal/>
    </div>
  </div>
  <footer className="d-flex center align-center">{React.string("copyrights")}</footer>
</div>
};