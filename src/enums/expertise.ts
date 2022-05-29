// eslint-disable-next-line no-shadow
export enum ExpertiseEnum {
  none = 0,
  react = 1,
  angular = 2,
  html = 3,
  css = 4,
  javascript = 5,
  typescript = 6,
  uiUx = 7,
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ExpertiseEnum {
  export const ALL_VALUES = [
    ExpertiseEnum.none,
    ExpertiseEnum.react,
    ExpertiseEnum.angular,
    ExpertiseEnum.html,
    ExpertiseEnum.css,
    ExpertiseEnum.javascript,
    ExpertiseEnum.typescript,
    ExpertiseEnum.uiUx,
  ];

  const TRANSLATIONS = [
    { enum: ExpertiseEnum.none, value: "expertise_enum.none" },
    { enum: ExpertiseEnum.react, value: "expertise_enum.react" },
    { enum: ExpertiseEnum.angular, value: "expertise_enum.angular" },
    { enum: ExpertiseEnum.html, value: "expertise_enum.html" },
    { enum: ExpertiseEnum.css, value: "expertise_enum.css" },
    { enum: ExpertiseEnum.javascript, value: "expertise_enum.javascript" },
    { enum: ExpertiseEnum.typescript, value: "expertise_enum.typescript" },
    { enum: ExpertiseEnum.uiUx, value: "expertise_enum.uiUx" },
  ];

  export function isValid(expertise: ExpertiseEnum): boolean {
    return ALL_VALUES.includes(expertise);
  }

  export function toTranslation(expertise: ExpertiseEnum): string {
    const tanslationObj = TRANSLATIONS.find((s) => s.enum === expertise);
    if (tanslationObj) {
      return tanslationObj.value;
    } else {
      throw Error(`translation not found for ExpertiseEnum.`);
    }
  }

  export function toEnum(role: string | ExpertiseEnum): ExpertiseEnum {
    return ALL_VALUES.find((s) => s.toString() === role);
  }
}
