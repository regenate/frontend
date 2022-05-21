import { LoginModel } from "models/login";
import { HttpService } from "services/http.service";

export class AuthApi {
  public static async signIn(data: LoginModel) {
    return HttpService.post("auth/login", data);
  }
}
