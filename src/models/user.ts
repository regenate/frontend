import { RoleEnum } from "enums/role";

export class UserModel {
  constructor(
    public readonly email: string,
    public readonly emailVerified: boolean,
    public readonly bearerToken: string,
    public readonly role: RoleEnum
  ) {}

  public static fromJson(json: any): UserModel {
    return {
      bearerToken: json?.data.bearerToken,
      emailVerified: json?.data.emailVerified,
      email: json?.data.email,
      role: json?.data.role,
    };
  }
}
