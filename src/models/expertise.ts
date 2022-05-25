import { ExperienceLevelEnum } from "enums/experience-level";
import { ExpertiseEnum } from "enums/expertise";

export class ExpertiseModel {
  constructor(
    public readonly expertise: ExpertiseEnum,
    public readonly experienceLevel: ExperienceLevelEnum
  ) {}
}
