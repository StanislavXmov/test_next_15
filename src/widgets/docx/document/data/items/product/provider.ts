import {getData as getRawData} from "./raw";

export const getData = () => {
  const itemsData = [];
  for (const item of getRawData()) {
    const itemNameInfo = item.okpd2Info ?? item.ktruInfo;
    const itemName = `${itemNameInfo.code} ${itemNameInfo.name}`;

    for (const proposal of item.proposals) {
      const itemRowData = {
        name: itemName,
        characteristics: proposal.characteristicsInfo.map(characteristic => {
          return `${characteristic.name}: ${characteristic.value}`;
        }),
        trademark: proposal.tradeMark,
        country: [proposal.oksmPOName, proposal.oksmName].filter(v => v).join(', '),
        vat: proposal.vatValue,
        measure: `${proposal.quantity} ${proposal.okeiName}`,
        count: `${proposal.quantity} ${proposal.okeiName}`,
      };

      itemsData.push(itemRowData);
    }
  }

  return {
    items: itemsData
  };
};
