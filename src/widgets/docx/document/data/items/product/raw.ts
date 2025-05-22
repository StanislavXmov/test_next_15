export const getData = () => {
  return [
    {
      restrictions: {
        isProhibitionForeignPurchaseObjects: "0",
        isRestrictForeignPurchaseObjects: "0",
        isPreferenceRFPurchaseObjects: "0",
        isImpossibilityProhibition: "1",
        reasonImpossibilityProhibition: "test test",
      },
      okpd2Info: {
        code: 123,
        name: "name",
      },
      ktruInfo: {
        code: 123,
        name: "name",
      },
      name: 123,
      proposals: [
        {
          oksmName: "РОССИЯ",
          oksmPOName: "РОССИЯ",
          vatValue: "20%",
          quantity: "10",
          okeiName: "шт",
          characteristicsInfo: [
            {
              name: "Характеристика 1",
              value: "Описание",
            },
            {
              name: "Характеристика 1",
              value: "Описание",
            },
            {
              name: "Характеристика 2",
              value:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae vitae quidem ducimus quibusdam repellendus illo perspiciatis architecto, autem reiciendis. Eaque explicabo natus deleniti harum, nostrum nisi illo cum facilis. Labore eius excepturi, amet repudiandae possimus error veniam iste eaque animi aliquam corrupti nemo, in quisquam est libero modi dolorum itaque laboriosam optio, repellat vel eveniet enim rerum exercitationem! Necessitatibus facilis aliquam, vero natus at a officia obcaecati eos magnam eius cupiditate reiciendis velit dignissimos maxime adipisci temporibus possimus omnis tempore, dolore voluptatibus nihil autem commodi dolorum ea. Ut sint voluptate at. Facilis at deleniti aperiam nesciunt aut voluptate eveniet velit ipsa impedit reprehenderit, placeat maxime provident unde dolore vitae porro consectetur fuga explicabo. Voluptatem ullam amet sequi nisi voluptatibus.",
            },
            {
              name: "Характеристика 1",
              value: "Описание",
            },
          ],
          tradeMark: "Бренд 1",
          certificateNameMedicalProduct: "certificateNameMedicalProduct",
          registryNumbers: [
            {
              registryNumber: "registryNumber",
              registryType: "registryType",
              totalScore: "totalScore",
            },
          ],
          unitPrice: "unitPrice",
          totalPrice: "totalPrice",
          totalPriceWithVat: "totalPriceWithVat",
        },
      ],
    },
  ];
};
