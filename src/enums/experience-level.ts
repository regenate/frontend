// eslint-disable-next-line no-shadow
export enum ExperienceLevelEnum {
  none = 0,
  junior = 1,
  intermediate = 2,
  senior = 3,
  master = 4,
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ExperienceLevelEnum {
  export const VALID_VALUES = [
    ExperienceLevelEnum.junior,
    ExperienceLevelEnum.intermediate,
    ExperienceLevelEnum.senior,
    ExperienceLevelEnum.master,
  ];

  const TRANSLATIONS = [
    { enum: ExperienceLevelEnum.none, value: "experience_level_enum.none" },
    { enum: ExperienceLevelEnum.junior, value: "experience_level_enum.junior" },
    {
      enum: ExperienceLevelEnum.intermediate,
      value: "experience_level_enum.intermediate",
    },
    { enum: ExperienceLevelEnum.senior, value: "experience_level_enum.senior" },
    { enum: ExperienceLevelEnum.master, value: "experience_level_enum.master" },
  ];

  export const ALL_VALUES = [ExperienceLevelEnum.none].concat(VALID_VALUES);

  export function isValid(expertise: ExperienceLevelEnum): boolean {
    return VALID_VALUES.includes(expertise);
  }

  export function toTranslation(experience: ExperienceLevelEnum): string {
    const tanslationObj = TRANSLATIONS.find((s) => s.enum === experience);
    if (tanslationObj) {
      return tanslationObj.value;
    } else {
      throw Error(`translation not found for ExperienceLevelEnum.`);
    }
  }
}
