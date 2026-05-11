import { HomeIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

const SINGLETON_TYPES = new Set(["homePage"]);
const HIDDEN_FROM_AUTO_LIST = new Set([
  ...SINGLETON_TYPES,
  "post",
  "category",
  "author",
]);

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .id("homePage")
        .icon(HomeIcon)
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.divider(),
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !HIDDEN_FROM_AUTO_LIST.has(item.getId()!),
      ),
    ]);
