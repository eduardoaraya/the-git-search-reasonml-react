include Actions;
[@react.component]
let make = (~dispatch, ~state) => {
  let close = _ => {
    let _ = dispatch({ type_: Actions.Close, payload: {
      cards: state.cards,
      modal: state.modal
    }});
  };
  <div className={ state.modal.modal_opem ? "overlayer show" : "overlayer" }>
    <div className="modal">
      <div className="modal-content">
        <div className="d-flex row">
          <figure className="modal-picture"> <img src=state.modal.avatar_url width="100%"/></figure>
          <div className="modal-info">
            <div className="modal-info-header">
              <h1>{React.string(state.modal.name != "" ? state.modal.name : "...")}</h1>
            </div>  
            <div className="modal-info-body">
              <ul>
                <li><p>{React.string("Username: ")}</p>
                  <p><span className="modal-info-value">{React.string(state.modal.login != "" ? state.modal.login : "...")}</span></p>
                </li>
                <li>
                  <p>{React.string("Cadastro: ")}</p><p><span className="modal-info-value">{React.string(state.modal.created_at != "" ? state.modal.created_at : "...")
                  }</span></p>
                </li>
                <li>
                  <p>{React.string("URL: ")}</p><a href=state.modal.html_url target="_blank"><span className="modal-info-value">{React.string(state.modal.html_url != "" ? state.modal.html_url : "...")}</span></a>
                </li>
              </ul>
              <ul className="right">
              <li><p>{React.string("Following: ")}</p><p><span className="modal-info-value">{React.string(state.modal.following != -1 ? Belt.Int.toString(state.modal.following) : "...")}</span></p></li>
              <li><p>{React.string("Followers: ")}</p><p><span className="modal-info-value">{React.string(state.modal.followers != -1 ? Belt.Int.toString(state.modal.followers) : "...")}</span></p></li>
              </ul>
            </div>
            <div className="modal-info-footer">
              <button className="btn btn-void" onClick=close>{React.string("Fechar")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}