import { useContext } from "react";
import lc from "../contexts/language-context";

export default function useTranslate() {
  const { t } = useContext(lc);
  return t;
}
