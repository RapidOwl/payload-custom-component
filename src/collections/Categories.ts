import { CollectionConfig } from "payload/types";
import CategoryLinkTypes from "../data/CategoryLinkTypes";

const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    defaultColumns: ["categoryName", "updatedAt"],
    useAsTitle: "categoryName",
    listSearchableFields: [
      "categoryName"
    ],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "categoryName",
      type: "text",
      index: true
    },
    {
      name: 'linkType',
      type: 'select',
      required: true,
      options: CategoryLinkTypes,
    }
  ],
};

export default Categories;
