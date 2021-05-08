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
  React.useEffect1(() => {
    Some(() => 
      switch listCards {
        | [||] => setBodyStyle(_ => resultBg)
        | _ => setBodyStyle(_ => logoBg) 
      });
    }, [|listCards|]);
  <div>
  
    <div className="body-wrapper" style=(
      ReactDOM.Style.make(~background=bodyStyle,())
    )>
      <Header setData=setListCards />
      <div className="content">
          <List cards=listCards />
      </div>
    </div>
    <footer className="d-flex center align-center">{React.string("copyrights")}</footer>
  </div>
};