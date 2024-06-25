import React from "react";
import Test2 from "./Test2";
import { useTranslation } from "react-i18next";

export default function Test() {
  const [count, setCount] = React.useState(0);

  const { t } = useTranslation();
  return (
    <div>
      <Test2></Test2>
      <button onClick={() => setCount(count + 1)}>
        Click {t("Welcome")}
        {count}
      </button>
    </div>
  );
}
