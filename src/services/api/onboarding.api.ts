import { RoleEnum } from "enums/role";
import { OriginModel } from "models/original";
import { HttpService } from "services/http.service";

export class OnboardingApi {
  public static async chooseRole(role: RoleEnum) {
    const body = {
      role: role,
    };

    return HttpService.post("user/role", body);
  }

  public static async updateOrigin(data: OriginModel) {
    return HttpService.post("mentee/origin", data);
  }
}
