export type RequisitesData = {
  customer: {
    commonInfo: {
      fullName: string;
      factualAddress: string;
      postalAddress: string;
      phone: string;
      fax: string;
      email: string;
      inn: string;
      ogrn: string;
      kpp: string;
    };
    bankRequisites: {
      correspondentAccount: string;
      bankName: string;
      paymentAccount: string;
      personalAccount: string;
      bik: string;
    };
  };
  supplier: {
    commonInfo: {
      fullName: string;
      factualAddress: string;
      postalAddress: string;
      phone: string;
      fax: string;
      email: string;
      inn: string;
      ogrn: string;
      kpp: string;
    };
    bankRequisites: {
      correspondentAccount: string;
      bankName: string;
      paymentAccount: string;
      personalAccount: string;
      bik: string;
    };
  };
  procedures: {
    registrationNumber: string;
    cteatedDt: string;
    ikzCode: string;
    proceduresName: string;
    maxSum: string;
    impossibleDetermine: string;
    supplierOffer: string;
    contractPrice: string;
    isPreference?: string;
    savingMoney?: string;
    percentageSavings?: string;
    contractProvisionValue?: string;
  };
};

export type ItemsData = {
  items: {
    name: string;
    characteristics: string[];
    trademark: string;
    country: string;
    vat: string;
    measure: string;
    count: string;
    restrictions: {
      isProhibitionForeignPurchaseObjects: string;
      isRestrictForeignPurchaseObjects: string;
      isPreferenceRFPurchaseObjects: string;
      isImpossibilityProhibition: string;
      reasonImpossibilityProhibition: string;
    };
    registryNumbers: {
      registryNumber: string;
      registryType: string;
      totalScore?: string;
    }[];
  }[];
};

export type Data = RequisitesData &
  ItemsData & {
    customerName: string;
    supplierOrganizationName: string;
    supplierMemberName: string;
    supplierPosition: string;
  };
