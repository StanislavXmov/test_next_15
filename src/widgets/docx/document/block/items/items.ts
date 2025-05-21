import {create as createNotMedicineItemsBlock} from "./medicines";

export function create(data) {
    switch (data?.itemsType) {
        case "product":
            return createNotMedicineItemsBlock(data);
        case "serviceOrWork":
            return createNotMedicineItemsBlock(data);
        case "medicine":
            return createNotMedicineItemsBlock(data);
        default:
            return createNotMedicineItemsBlock(data);
    }
}

