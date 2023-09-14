import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";

export default defineConfig({
  name: "default",
  title: "sanity-tut",

  apiVersion: "2023-03-04",
  projectId: "sb9rdckf",
  dataset: "production",
  basePath: "/admin",

  plugins: [deskTool()],
  schema: { types: schemas },
});
