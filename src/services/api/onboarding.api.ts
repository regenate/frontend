import { RoleEnum } from "enums/role";
import { AvatarModel } from "models/avatar";
import { BackgroundModel } from "models/background";
import { BioModel } from "models/bio";
import { ExpertiseModel } from "models/expertise";
import { OriginModel } from "models/origin";
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

  public static async updateExpertise(data: ExpertiseModel) {
    return HttpService.post("mentee/expertise", data);
  }

  public static async updateBackground(data: BackgroundModel) {
    return HttpService.post("mentee/background", data);
  }

  public static async updateAvatar(data: AvatarModel) {
    return HttpService.post("mentee/avatar", data);
  }

  public static async updateBio(data: BioModel) {
    return HttpService.post("mentee/bio", data);
  }
}
