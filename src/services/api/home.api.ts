import { RoleEnum } from "enums/role";
import { HttpService } from "services/http.service";

export class HomeApi {
  public static async getHome() {
    return HttpService.get(
      `${HttpService.getRole() === RoleEnum.mentee ? "mentee" : "mentor"}/home`
    );
  }
}
