const requisitesData = {
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
  proceduresInfo: {
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

const itemsData = {
  items: [
    {
      name: "Товар 1",
      characteristics: [
        "Характеристика 1: Описание",
        "Характеристика 2: Описание",
      ],
      trademark: "Бренд 1",
      country: "Россия",
      vat: "20%",
      measure: "шт",
      count: "10",
    },
    {
      name: "Товар 2",
      characteristics: [
        "Характеристика 1: Описание",
        "Характеристика 2: Описание",
        "Характеристика 3: Описание",
      ],
      trademark: "Бренд 2",
      country: "Китай",
      vat: "20%",
      measure: "шт",
      count: "5",
    },
    {
      name: "Товар 33",
      characteristics: [
        "Характеристика 1: Описание",
        "Характеристика 2: Описание",
      ],
      trademark: "Бренд 1",
      country: "Россия",
      vat: "20%",
      measure: "шт",
      count: "10",
    },
    {
      name: "Товар 4",
      characteristics: [
        "Характеристика 1: Описание",
        "Характеристика 2: Описание",
        "Характеристика 1: Описание",
        "Характеристика 2: Описание",
        "Характеристика 3: Описание",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae vitae quidem ducimus quibusdam repellendus illo perspiciatis architecto, autem reiciendis. Eaque explicabo natus deleniti harum, nostrum nisi illo cum facilis. Labore eius excepturi, amet repudiandae possimus error veniam iste eaque animi aliquam corrupti nemo, in quisquam est libero modi dolorum itaque laboriosam optio, repellat vel eveniet enim rerum exercitationem! Necessitatibus facilis aliquam, vero natus at a officia obcaecati eos magnam eius cupiditate reiciendis velit dignissimos maxime adipisci temporibus possimus omnis tempore, dolore voluptatibus nihil autem commodi dolorum ea. Ut sint voluptate at. Facilis at deleniti aperiam nesciunt aut voluptate eveniet velit ipsa impedit reprehenderit, placeat maxime provident unde dolore vitae porro consectetur fuga explicabo. Voluptatem ullam amet sequi nisi voluptatibus.",
        "Характеристика 2: Описание",
        "Характеристика 3: Описание",
        "Характеристика 1: Описание",
        "Характеристика 2: Описание",
        "Характеристика 3: Описание",
      ],
      trademark: "Бренд 1",
      country: "Россия",
      vat: "20%",
      measure: "шт",
      count: "10",
    },
  ],
};

export const getData = () => {
  return {
    ...requisitesData,
    customerName: "ООО Ромашка",
    supplierOrganizationName: "ООО Поставщик",
    supplierMemberName: "Иванов Иван Иванович",
    supplierPosition: "Генеральный директор",
    ...itemsData,
  };
};
