import { LoginModel } from "models/login";

export class AuthApi {
  public static async signIn(data: LoginModel) {
    return fetch("https://regenate.herokuapp.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}
