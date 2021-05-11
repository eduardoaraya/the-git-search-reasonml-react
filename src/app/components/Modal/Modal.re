type user = {
  avatar: string,
  username: string,
  url: string,
  date: string,
  followers: int, 
  following: int,
  modal_opem: bool
};
[@react.component]
let make = (~data: user, ~reset) => {
  <div className={ data.modal_opem ? "overlayer show" : "overlayer" }>
    <div className="modal">
      <div className="modal-content">
        <div className="d-flex row">
          <figure className="modal-picture"> <img src=data.avatar width="100%"/></figure>
          <div className="modal-info">
            <div className="modal-info-header">
              <h1>{React.string(data.username != "" ? data.username : "...")}</h1>
            </div>  
            <div className="modal-info-body">
              <ul>
                <li><p>{React.string("Username: ")}</p><p><span className="modal-info-value">{React.string(data.username != "" ? data.username : "...")}</span></p></li>
                <li><p>{React.string("Cadastro: ")}</p><p><span className="modal-info-value">{React.string(data.date != "" ? data.date : "...")}</span></p></li>
                <li><p>{React.string("Cadastro: ")}</p><p><span className="modal-info-value">{React.string(data.url != "" ? data.url : "...")}</span></p></li>
              </ul>
              <ul className="right">
              <li><p>{React.string("Cadastro: ")}</p><p><span className="modal-info-value">{React.string(data.following != -1 ? Belt.Int.toString(data.following) : "...")}</span></p></li>
              <li><p>{React.string("Cadastro: ")}</p><p><span className="modal-info-value">{React.string(data.followers != -1 ? Belt.Int.toString(data.followers) : "...")}</span></p></li>
              </ul>
            </div>
            <div className="modal-info-footer">
              <button className="btn btn-void" onClick=reset>{React.string("Fechar")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}