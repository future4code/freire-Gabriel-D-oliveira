

export const urlBase = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Gabriel-D-oliveira"


export const auth = localStorage.getItem("token");

export const headersAxios = {
    headers: {
      auth: auth,
    },
  }