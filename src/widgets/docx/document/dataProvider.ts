import { getData as getProductItemsData } from "./data/items/product/provider";
import { getData as getRequisitesData } from "./data/requisites";
import { getData as getBaseData } from "./data/base";

export const getData = () => {
  return {
    ...getRequisitesData(),
    ...getBaseData(),
    ...getProductItemsData(),
  };
};
