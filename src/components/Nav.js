import React from 'react';

// import navigation data
import { useTranslation } from "react-i18next";
const Nav = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <ul className="flex gap-x-8">
        <li>
          <a href="/thong_tin">{t("information")}</a>
        </li>
        <li>
          <a href="/gioi_thieu">{t("introduce")}</a>
        </li>
        <li>
          <a href="/skin_care_scan">Skin Care Scan</a>
        </li>
        <li>
          <a href="/cam_ket">{t("commitment")}</a>
        </li>
        <li>
          <a href="/bi_quyet_cham_soc_da">{t("news")}</a>
        </li>
        <li>
          <a href="/lien_he">{t("contact")}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
