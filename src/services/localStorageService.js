let USER_NETFLIX_COPY = "user_netflix_copy";

export const localStorageService = {
  setUserInfo: (user) => {
    let dataJson = JSON.stringify(user);
    localStorage.setItem(USER_NETFLIX_COPY, dataJson);
  },
  getUserInfo: () => {
    let dataJson = localStorage.getItem(USER_NETFLIX_COPY);
    if (dataJson) {
      return JSON.parse(dataJson);
    }
    return null;
  },
  removeUserInfo: () => {
    localStorage.removeItem(USER_NETFLIX_COPY);
  },
};
