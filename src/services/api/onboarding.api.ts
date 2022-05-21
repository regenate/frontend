import { RoleEnum } from "enums/role";
import { HttpService } from "services/http.service";

export class OnboardingApi {
  public static async chooseRole(role: RoleEnum) {
    const body = {
      role: role,
    };

    return HttpService.post("user/role", body);
  }
}
