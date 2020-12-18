

// ACTION CREATORS FOR NEW USER
export const loadUser = (user) => {
  return {
    type: "USER",
    payload: user
  };
};

export const loadUserId = (Uid) => {
  return {
    type: "USERID",
    payload: Uid
  };
};


