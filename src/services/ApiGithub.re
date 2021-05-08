[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";
module ApiGithub = {
  let url = "https://api.github.com/search/users?q=";
  let get = (user: string, setData) : 
    Js.Promise.t(bool)
   => 
    Js.Promise.(
      fetch(url ++ user)
        |> then_(response => response##json())
        |> then_(jsonResponse => {
          setData(jsonResponse##items);
          Js.Promise.resolve(true);
        })
        |> catch(_err => Js.Promise.resolve(false))
    );

  let handleSearch = 
    (search, setData) : (Js.Promise.t(bool)) => 
      switch search {
        | "" => Js.Promise.resolve(false)
        | search => get(search, setData); 
      }
};