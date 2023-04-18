import { CollectionConfig } from "payload/types";
import CustomRelationship from "../custom-relationship/CustomRelationship";

const CategoryMenus: CollectionConfig = {
  slug: "category-menus",
  admin: {
    defaultColumns: ["categoryMenuName", "updatedAt"],
    useAsTitle: "categoryMenuName",
    listSearchableFields: [
      "categoryMenuName"
    ]
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "categoryMenuName",
      type: "text",
      index: true
    },
    {
      name: "categories",
      type: "relationship",
      admin: {
        components: {
          Field: CustomRelationship
        },
      },
      relationTo: "categories",
      hasMany: true,
    }
  ],
};

export default CategoryMenus;
