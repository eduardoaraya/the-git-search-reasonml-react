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
      {
        ...state,
        modal: action.payload.modal
      };
    }
    | LoadMoreInfo => {
      {
        ...state,
        modal: action.payload.modal
      };
    }
  }
}

