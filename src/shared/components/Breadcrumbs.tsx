import { Link } from "react-router";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav>
      {items.map(({ label, to }, index) => {
        return (
          <>
            <span>{to ? <Link to={to}>{label}</Link> : label}</span>
            {index !== items.length - 1 ? <span> / </span> : ""}
          </>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
