import { BackgroundModel } from "./background";
import { BioModel } from "./bio";
import { ExpertiseModel } from "./expertise";
import { OriginModel } from "./origin";

export type UserCompleteType = BackgroundModel &
  BioModel &
  ExpertiseModel &
  OriginModel & { avatar: string };
export class UserComplete {
  public static fromJson(json: any): UserCompleteType {
    const mentee = json?.mentee;
    return {
      bio: mentee?.bio,
      country: mentee?.country,
      experienceLevel: mentee?.experienceLevel,
      expertise: mentee?.expertise,
      figmaPortfolioUrl: mentee?.figmaPortfolioUrl,
      gitHubUrl: mentee?.gitHubUrl,
      language: mentee?.language,
      linkedlnUrl: mentee?.linkedlnUrl,
      companyOrSchool: mentee?.companyOrSchool,
      jobTitle: mentee?.jobTitle,
      avatar: mentee?.avatar,
    };
  }
}
