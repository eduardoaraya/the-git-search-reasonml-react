include Actions;
[@react.component]
let make = (~card: Actions.user, ~dispatch) => {
  let handleViewMoreClick = _ => {
    let _ = dispatch({
      type_: Actions.MoreInfo,
      payload: {
        cards: [||],
        modal: {
          ...card,
          followers: -1,
          following: -1,
          created_at: "",
          modal_opem: true
        }
      }
    });
    let _ = ApiGithub.getUser(card.login)
      |> Js.Promise.then_(res =>  {
        dispatch({
          type_: Actions.LoadMoreInfo,
          payload: {
            cards: [||],
            modal: {
              ...res,
              modal_opem: true
            }
          }
        });
      Js.Promise.resolve(res);
    });
  };
  <div className="card" style=(
    ReactDOM.Style.make(
      ~flex="1",
      ~margin="15px",
      ~minWidth="295px",
      ~maxWidth="295px",
      ~background="#FFF",
      ~boxShadow="0px 0px 6px rgba(47, 37, 68, 0.25)",
      ~borderRadius="10px", ()))>
    <div className="picture" style=(
      ReactDOM.Style.make(
        ~overflow="hidden",
        ~borderRadius="10px 10px 0px 0px", ()))>
      <img src=card.avatar_url width="100%" />
    </div>
    <div className="card-content">
      <span className="card-name">{React.string(card.login)}</span>
      <span className="card-profile">
        <a className="link" href={card.html_url}>{React.string(card.html_url)}</a>
      </span>
      <span className="card-score">{React.string("Score: "++ Belt.Int.toString(card.score))}</span>
      <button className="btn" onClick={handleViewMoreClick}>{React.string("Ver mais")}</button>
    </div>
  </div>
}