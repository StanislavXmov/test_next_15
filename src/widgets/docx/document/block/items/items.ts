import { Data } from "../../types";
import { create as createNotMedicineItemsBlock } from "./product";
import { create as createServiceOrWorkItemsBlock } from "./service-or-work";

export function create(
  data: Data & { itemsType: "product" | "serviceOrWork" | "medicine" }
) {
  switch (data?.itemsType) {
    case "product":
      return createNotMedicineItemsBlock(data);
    case "serviceOrWork":
      return createServiceOrWorkItemsBlock(data);
    case "medicine":
      return createNotMedicineItemsBlock(data);
    default:
      return createNotMedicineItemsBlock(data);
  }
}
