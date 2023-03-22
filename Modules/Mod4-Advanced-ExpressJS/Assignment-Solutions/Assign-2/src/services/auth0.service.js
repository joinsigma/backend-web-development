import axios from "axios";

class Auth0Service {
  async login(email, password) {
    const { data } = await axios.post(
      `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      {
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_SECRET,
        username: email,
        password,
        scope: "openid",
        grant_type: "password",
      }
    );

    return {
      token: data.id_token,
      expires_in: data.expires_in,
      token_type: data.token_type,
    };
  }

  async register(userData) {
    try {
      const { data } = await axios.post(
        `https://${process.env.AUTH0_DOMAIN}/dbconnections/signup`,
        {
          client_id: process.env.AUTH0_CLIENT_ID,
          email: userData.email,
          password: userData.password,
          connection: "Username-Password-Authentication",
        }
      );
      if (!data) {
        return;
      }
      return this.login(userData.email, userData.password);
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export default new Auth0Service();
