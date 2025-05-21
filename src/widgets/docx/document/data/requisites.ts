export const getData = () => {
  return {
    customer: {
      commonInfo: {
        fullName: "ООО Пример Заказчика",
        factualAddress: "г. Москва, ул. Примерная, д. 10",
        postalAddress: "127000, г. Москва, а/я 123",
        phone: "+7 (495) 123-45-67",
        fax: "+7 (495) 765-43-21",
        email: "customer@example.com",
        inn: "1234567890",
        ogrn: "1234567890123",
        kpp: "123456789",
      },
      bankRequisites: {
        correspondentAccount: "30101810400000000225",
        bankName: "ПАО Сбербанк",
        paymentAccount: "40702810400000012345",
        personalAccount: "30101810400000000225",
        bik: "044525225",
      },
    },
    supplier: {
      commonInfo: {
        fullName: "ООО Пример Поставщика",
        factualAddress: "г. Санкт-Петербург, ул. Поставочная, д. 5",
        postalAddress: "190000, г. Санкт-Петербург, а/я 456",
        phone: "+7 (812) 987-65-43",
        fax: "+7 (812) 543-21-98",
        email: "supplier@example.com",
        inn: "0987654321",
        ogrn: "0987654321098",
        kpp: "098765432",
      },
      bankRequisites: {
        correspondentAccount: "30101810600000000678",
        bankName: "ПАО ВТБ",
        paymentAccount: "40702810600000054321",
        personalAccount: "30101810600000000678",
        bik: "044525678",
      },
    },
    procedures: {
      registrationNumber: "4833450157801242256",
      cteatedDt: "2025-01-01",
      ikzCode: "201444446000444446000411111910111400",
      proceduresName: "Кошачий корм",
      maxSum: "1000",
      impossibleDetermine: "0",
      supplierOffer: "1000",
      contractPrice: "1000",
    },
  };
};
