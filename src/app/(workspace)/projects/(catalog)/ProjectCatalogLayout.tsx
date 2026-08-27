"use client";

import { usePathname } from "next/navigation";

import { ProjectsRoute } from "../ProjectsRoute";

export function ProjectCatalogLayout({ children }: { children: React.ReactNode }) {
  const catalogVisible = usePathname() === "/projects";

  return (
    <>
      <div className={catalogVisible ? "contents" : "hidden"}>
        <ProjectsRoute />
      </div>
      {!catalogVisible && children}
    </>
  );
}
