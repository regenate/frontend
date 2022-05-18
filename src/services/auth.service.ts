import { LoginModel } from "models/login";
import { UserModel } from "models/user";

export class AuthService {
  public static async login(data: LoginModel) {
    try {
      const request = await fetch("https://regenate.herokuapp.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await request.json();
      return UserModel.fromJson(response);
    } catch (error) {
      throw error;
    }
  }
}
