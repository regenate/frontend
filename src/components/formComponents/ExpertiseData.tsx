import { ExpertiseEnum } from "enums/expertise";
import React from "react";
import { useTranslation } from "react-i18next";

const ExpertiseData = () => {
  const { t } = useTranslation();
  return (
    <>
      <option value={undefined}> {t("general.none")}</option>
      {ExpertiseEnum.ALL_VALUES.map((exp, i) => (
        <option value={exp} key={i}>
          {t(ExpertiseEnum.toTranslation(exp))}
        </option>
      ))}
    </>
  );
};

export default ExpertiseData;
