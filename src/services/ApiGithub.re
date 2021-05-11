[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";
module ApiGithub = {
  let urlList = "https://api.github.com/search/users?q=";
  let urlUser = "https://api.github.com/users/";
  let getList = (search: string, setData) : 
    Js.Promise.t(bool)
   => 
    Js.Promise.(
      fetch(urlList ++ search)
        |> then_(response => response##json())
        |> then_(jsonResponse => {
          Js.log(jsonResponse);
          setData(jsonResponse##items);
          Js.Promise.resolve(true);
        })
        |> catch(_err => Js.Promise.resolve(false))
    );
    
  let getUser = (user: string) =>
    Js.Promise.(
      fetch(urlUser ++ user)
        |> then_(response => response##json())
        |> then_(json => Js.Promise.resolve(json))
    );

  let handleSearch = 
    (search, setData) : (Js.Promise.t(bool)) => 
      switch search {
        | "" => Js.Promise.resolve(false)
        | _ => getList(search, setData); 
      }
};