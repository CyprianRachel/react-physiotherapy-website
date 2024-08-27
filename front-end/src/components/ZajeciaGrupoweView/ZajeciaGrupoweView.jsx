import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { CenteredContent } from "../CenteredContent/CenteredContent";

export function ZajeciaGrupoweView({ children }) {
  return (
    <CenteredContent>
      <Breadcrumbs />
      {children}
    </CenteredContent>
  );
}
