import { ExperienceLevelEnum } from "enums/experience-level";
import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <>
      {ExperienceLevelEnum.ALL_VALUES.map((exp, i) => (
        <option value={exp} key={i}>
          {t(ExperienceLevelEnum.toTranslation(exp))}
        </option>
      ))}
    </>
  );
};

export default Experience;
