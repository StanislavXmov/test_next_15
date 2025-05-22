import { getData as getRawData } from "./raw";

export const getData = () => {
  const itemsData = [];
  for (const item of getRawData()) {
    const itemNameInfo = item.okpd2Info ?? item.ktruInfo;
    const itemName = `${itemNameInfo.code} ${itemNameInfo.name}`;

    for (const proposal of item.proposals) {
      const itemRowData = {
        name: itemName,
        characteristics: proposal.characteristicsInfo.map((characteristic) => {
          return `${characteristic.name}: ${characteristic.value}`;
        }),
        trademark: proposal.tradeMark,
        country: [proposal.oksmPOName, proposal.oksmName]
          .filter((v) => v)
          .join(", "),
        vat: proposal.vatValue,
        measure: `${proposal.quantity} ${proposal.okeiName}`,
        count: `${proposal.quantity} ${proposal.okeiName}`,
        restrictions: {
          isProhibitionForeignPurchaseObjects:
            item.restrictions.isProhibitionForeignPurchaseObjects,
          isRestrictForeignPurchaseObjects:
            item.restrictions.isRestrictForeignPurchaseObjects,
          isPreferenceRFPurchaseObjects:
            item.restrictions.isPreferenceRFPurchaseObjects,
          isImpossibilityProhibition:
            item.restrictions.isImpossibilityProhibition,
          reasonImpossibilityProhibition:
            item.restrictions.reasonImpossibilityProhibition,
        },
        registryNumbers: proposal.registryNumbers,
      };

      itemsData.push(itemRowData);
    }
  }

  return {
    items: itemsData,
  };
};
