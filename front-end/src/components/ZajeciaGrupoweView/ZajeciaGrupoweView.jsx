import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./ZajeciaGrupoweView.module.css";

export function ZajeciaGrupoweView({ children }) {
  return (
    <CenteredContent>
      <Breadcrumbs />
      {children}
    </CenteredContent>
  );
}
