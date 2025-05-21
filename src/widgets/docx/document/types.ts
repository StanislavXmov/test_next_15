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
  }[];
};

export type Data = RequisitesData &
  ItemsData & {
    customerName: string;
    supplierOrganizationName: string;
    supplierMemberName: string;
    supplierPosition: string;
  };
