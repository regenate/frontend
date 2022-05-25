import React from "react";
import { useTranslation } from "react-i18next";
import { Country } from "utils/country";

const Countries = () => {
  const { t } = useTranslation();
  return (
    <>
      <option value={undefined}> {t("general.none")}</option>
      {Country.getAllCountries().map((country, i) => (
        <option value={country} key={i}>
          {country}
        </option>
      ))}
    </>
  );
};

export default Countries;
