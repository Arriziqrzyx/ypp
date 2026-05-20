import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ className }) {
  const { i18n } = useTranslation();

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem("i18nextLng", lng);
    } catch (e) {}
  };

  const current = i18n.language || "en";

  return (
    <div className={className}>
      <button
        onClick={() => setLang("en")}
        className={`text-[12px] font-semibold uppercase px-2 ${current === "en" ? "opacity-100" : "opacity-60"}`}
      >
        EN
      </button>
      <span className="mx-1 text-[12px]">|</span>
      <button
        onClick={() => setLang("id")}
        className={`text-[12px] font-semibold uppercase px-2 ${current === "id" ? "opacity-100" : "opacity-60"}`}
      >
        ID
      </button>
    </div>
  );
}
