export const tastingOptions = {
  distilleries: [
    { value: 1, name: 'Glenmorangie' },
    { value: 2, name: 'GlenDronach' },
    { value: 3, name: 'Aberlour' },
    { value: 4, name: 'The Glenlivet' },
    { value: 5, name: 'Balvenie' }
  ],
  heritage: {
    countries: [
      { value: 'SCT', name: 'Schottland' },
      { value: 'IRL', name: 'Irland' },
      { value: 'USA', name: 'Vereinigte Staaten von Amerika' },
      { value: 'JPN', name: 'Japan' },
      { value: 'CAN', name: 'Kanada' },
      { value: 'GER', name: 'Deutschland' }
    ],
    regions: {
      SCT: [
        { value: 'HL', name: 'Highlands' },
        { value: 'SS', name: 'Speyside' },
        { value: 'LL', name: 'Lowlands' },
        { value: 'CP', name: 'Campletown' },
        { value: 'IL-IS', name: 'Inseln - Islay' },
        { value: 'IL-SK', name: 'Inseln - Skye' },
        { value: 'IL-O', name: 'Inseln - Orkney' },
        { value: 'IS-A', name: 'Inseln - Arran' },
        { value: 'IS-M', name: 'Inseln - Mule' },
        { value: 'IS-J', name: 'Inseln - Jura' }
      ],
      GER: [
        { value: 'BW', name: 'Baden-Württemberg' },
        { value: 'BY', name: 'Bayern' },
        { value: 'BE', name: 'Berlin' },
        { value: 'BB', name: 'Brandenburg' },
        { value: 'HB', name: 'Bremen' },
        { value: 'HH', name: 'Hamburg' },
        { value: 'HE', name: 'Hessen' },
        { value: 'MV', name: 'Mecklenburg-Vorpommern' },
        { value: 'NI', name: 'Niedersachsen' },
        { value: 'NW', name: 'Nordrhein-Westfalen' },
        { value: 'RP', name: 'Rheinland-Pfalz' },
        { value: 'SL', name: 'Saarland' },
        { value: 'SN', name: 'Sachsen' },
        { value: 'ST', name: 'Sachen-Anhalt' },
        { value: 'SH', name: 'Schleswig-Holstein' },
        { value: 'TH', name: 'Tühring' }
      ],
      USA: [{ value: 'KY', name: 'Kentucky' }, { value: 'TN', name: 'Tennessee' }],
      IRL: [],
      JPN: [],
      WAL: [],
      IND: [],
      ESP: [],
      CAN: [],
      POL: [],
      DNK: [],
      SWE: [],
      TWN: [],
      FRA: []
    }
  },
  kinds: [
    { value: 'SM', name: 'Single Malt' },
    { value: 'BM', name: 'Blended Malt' },
    { value: 'BL', name: 'Blend' },
    { value: 'BO', name: 'Bourbon' },
    { value: 'RY', name: 'Rye' },
    { value: 'GR', name: 'Grain' },
    { value: 'SG', name: 'Single Grain' }
  ],
  caskHeriatage: [
    { value: 'EU', name: 'Europäische Eiche' },
    { value: 'US', name: 'Amerikanische Weißeiche' },
    { value: 'JPN', name: 'Japanische Eiche' }
  ],
  maturation: {
    caskKinds: [
      { value: 'SHERRY', name: 'Sherry' },
      { value: 'WINE', name: 'Wein' },
      { value: 'MADEIRA', name: 'Madeira' },
      { value: 'MARSALA', name: 'Marsala' },
      { value: 'MAGALA', name: 'Magala' },
      { value: 'SAUTERNES', name: 'Sauternes' },
      { value: 'BOURBON', name: 'Bourbon' },
      { value: 'PORT', name: 'Portwein' },
      { value: 'RUM', name: 'Rum' },
      { value: 'OAK', name: 'Frisches Eichenfass' },
      { value: 'BEER', name: 'Bier' }
    ],
    specifications: {
      SHERRY: [
        { value: 'OL', name: 'Oloroso' },
        { value: 'PX', name: 'Pedro Ximenez' },
        { value: 'FI', name: 'Fino' },
        { value: 'AM', name: 'Amontillado' },
        { value: 'MA', name: 'Manzanilla' }
      ],
      WINE: [
        { value: 'CABERNET_SAUVIGNON', name: 'Cabernet Sauvignon' },
        { value: 'AMERONE', name: 'Amerone' },
        { value: 'BURGUNDY', name: 'Burgunder' },
        { value: 'BANYUL', name: 'Banyul' }
      ],
      MADEIRA: [],
      MARSALA: [],
      SAUTERNES: [],
      BOURBON: [],
      PORT: [{ value: 'RED_PORT', name: 'Roter Portwein' }, { value: 'WHITE_PORT', name: 'Weißer Portwein' }],
      MALAGA: [],
      RUM: [],
      OAK: [{ value: 'US_OAK', name: 'Amerikanische Weißeiche' }, { value: 'EU_OAK', name: 'Europäische Eiche' }],
      BEER: [{ value: 'IPA', name: 'India Pale Ale' }]
    }
  }
};
