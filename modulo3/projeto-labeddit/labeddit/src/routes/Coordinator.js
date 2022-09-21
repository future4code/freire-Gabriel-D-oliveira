export const goToRegisterPage = (navigate) => {
  navigate("/register");
};

export const goToLoginPage = (navigate) => {
  navigate("/");
};

export const goToFeedPage = (navigate) => {
  navigate("/feed");
};
export const goToPostPage = (navigate, id) => {
  navigate(`/feed/${id}`);
};
