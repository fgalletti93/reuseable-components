import React from "react";
import { Link } from "./Link";

export const Sidebar = () => {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Buttons", path: "/buttons" },
    { label: "Accordion", path: "/accordion" },
    { label: "Modal", path: "/modal" },
  ];

  const renderedLinks = links.map(({ path, label }) => {
    return (
      <Link
        className="mb-3"
        key={label}
        to={path}
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
};
