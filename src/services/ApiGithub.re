[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";
module ApiGithub = {
  let urlList = "https://api.github.com/search/users?q=";
  let urlUser = "https://api.github.com/users/";
  let getList = (search: string) => 
    Js.Promise.(
      fetch(urlList ++ search)
        |> then_(response => response##json())
    );
    
  let getUser = (user: string) =>
    Js.Promise.(
      fetch(urlUser ++ user)
        |> then_(response => response##json())
        |> then_(json => Js.Promise.resolve(json))
    );

  let handleSearch = (search) => 
    switch search {
      | _ => getList(search) 
    }
};