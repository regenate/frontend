import { LoginModel } from "models/login";
import { RegisterModel } from "models/register";
import { HttpService } from "services/http.service";

export class AuthApi {
  public static async signIn(data: LoginModel) {
    return HttpService.post("auth/login", data);
  }

  public static async register(data: RegisterModel) {
    return HttpService.post("auth/signup", data);
  }
}
