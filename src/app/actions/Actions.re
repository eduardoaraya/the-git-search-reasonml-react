include ApiGithub;

type actionsTypes = 
  | Search
  | MoreInfo
  | Close
  | LoadMoreInfo;

type user = {
  id: int,
  name: string,
  avatar: string,
  login: string,
  url: string,
  created_at: string,
  followers: int, 
  following: int,
  modal_opem: bool,
  avatar_url: string,
  html_url: string,
  score: int,
};

type state = {
  cards: array(user),
  modal: user
};

type users = array(user);

type action = {
  type_: actionsTypes,
  payload: state
};

// let jsToUser = (data: Js.t('a)): user => { 
//   id: data##id,
//   avatar: data##avatar,
//   name: data##username,
//   url: data##url,
//   created_at: data##created_at,
//   followers: data##followers, 
//   following: data##following,
//   modal_opem: data##modal_opem,
//   avatar_url: data##avatar_url,
//   login: data##login,
//   html_url: data##html_url,
//   score: data##score,
// } 

let initialState: state = {
  cards: [||],
  modal: {
    id: 0,
    modal_opem: false,
    avatar: "",
    name: "",
    url: "",
    created_at: "",
    following: -1,
    followers: -1,
    avatar_url: "",
    login: "",
    html_url: "",
    score: 0,
  }
}

let reducer = (state, action: action) => {
  switch (action.type_) {
    | Search => {
      {
        ...state,
        cards: action.payload.cards
      };
    }
    | Close => {
      {
        ...state,
        modal: initialState.modal
      }
    }
    | MoreInfo => {
      Js.log(action.payload);
      {
        ...state,
        modal: action.payload.modal
      };
    }
    | LoadMoreInfo => {
      Js.log("More info:");
      {
        ...state,
        modal: action.payload.modal
      };
    }
  }
}

