include ApiGithub;

type actionsTypes = 
  | Search
  | MoreInfo
  | Close; 

type user = {
  id: int,
  avatar: string,
  login: string,
  username: string,
  url: string,
  date: string,
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

let jsToUser = (data: Js.t('a)): user => { 
  id: data##id,
  avatar: data##avatar,
  username: data##username,
  url: data##url,
  date: data##date,
  followers: data##followers, 
  following: data##following,
  modal_opem: data##modal_opem,
  avatar_url: data##avatar_url,
  login: data##login,
  html_url: data##html_url,
  score: data##score,
} 

let initialState: state = {
  cards: [||],
  modal: {
    id: 0,
    modal_opem: false,
    avatar: "",
    username: "",
    url: "",
    date: "",
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
      Js.log("> Close");
      state;
    }
    | MoreInfo => {
      Js.log(action.payload);
      {
        ...state,
        modal: action.payload.modal
      };
    }
  }
}

