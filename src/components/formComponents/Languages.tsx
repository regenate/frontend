import React from "react";
import { useTranslation } from "react-i18next";
import { Country } from "utils/country";

const Languages = () => {
  const { t } = useTranslation();
  return (
    <>
      <option value={undefined}> {t("general.none")}</option>
      {Country.getAllLanguage().map((lang, i) => (
        <option value={lang} key={i}>
          {lang}
        </option>
      ))}
    </>
  );
};

export default Languages;
