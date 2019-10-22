export const whiskies = [
  {
    number: 1, // number
    disillery: 'Glenmorangie', // string
    name: 'Quinta Ruban', // string
    age: 12, // number | null
    kind: 'SM', // SM | BO | B | BM
    heritage: {
      country: 'SC', // SCT | IRL | USA | CAN | GER | JPN ... checkout options
      area: 'HIGH', // related to country. checkout options | null
    },
    extras: {
      colored: true, // boolean
      chillFiltered: false, // boolean
      singleCask: false, // boolean
      caskStrength: false, // boolean
    },
    vol: 46.3, // float
    dateOfTasting: 1534000000000, // UNIX Timestamp
    marturation: [
      {
        cask: 'BOURBON', // options.maturation.caskKinds | null
        heritageOfCask: 'US', // US | EU | JPN | null
        specifictionOfContent: null, //  options.maturation.specifications | null
      },
    ],
    finish: [
      {
        cask: 'PORT', // options.maturation.caskKinds | null
        heritageOfCask: null,
        specifictionOfContent: null,
        duration: 26546787987, // Milliseconds
      },
    ],
    rating: 5, // 1-5
    favorit: true, // boolean
  }
];
