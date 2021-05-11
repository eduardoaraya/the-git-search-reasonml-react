include ApiGithub;
[@react.component]
let make = (~card, ~dispatchViewMoreClick) => {
  let handleViewMoreClick = 
      _ => {
        dispatchViewMoreClick(_ : Modal.user => 
          {
            modal_opem: true,
            avatar: card##avatar_url,
            username: card##login,
            url: card##html_url,
            date: "",
            following: 100,
            followers: 100
        }); 
        card##login
          |> ApiGithub.getUser 
          |> Js.Promise.then_(res => {
            Js.log(res);
          });
    };
    <div className="card" style=(
      ReactDOM.Style.make(
        ~flex="1",
        ~margin="15px",
        ~minWidth="295px",
        ~maxWidth="295px",
        /* ~maxHeight="273px", */
        ~background="#FFF",
        ~boxShadow="0px 0px 6px rgba(47, 37, 68, 0.25)",
        ~borderRadius="10px", ()))>
    <div className="picture" style=(
      ReactDOM.Style.make(
        ~overflow="hidden",
        ~borderRadius="10px 10px 0px 0px", ()))>
      <img src=card##avatar_url width="100%" />
    </div>
    <div className="card-content">
      <span className="card-name">{React.string(card##login)}</span>
      <span className="card-profile">
        <a className="link" href={card##html_url}>{React.string(card##html_url)}</a>
      </span>
      <span className="card-score">{React.string("Score: "++ card##score)}</span>
      <button className="btn" onClick={_ => handleViewMoreClick}>{React.string("Ver mais")}</button>
    </div>
  </div>
}