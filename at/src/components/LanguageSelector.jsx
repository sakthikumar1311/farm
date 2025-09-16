import { useState } from "react";

function LanguageSelector() {
  const [lang, setLang] = useState("en");

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="en">English</option>
      <option value="ta">தமிழ்</option>
      <option value="hi">हिन्दी</option>
    </select>
  );
}

export default LanguageSelector;
