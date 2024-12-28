export const mockIngredients = {
  ingredients: [
    {
      _id: '643d69a5c3f7b9001cfa0941',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
    },
    {
      _id: '643d69a5c3f7b9001cfa0941',
      name: 'Биокотлета из марсианской Магнолии',
      type: 'main',
      proteins: 420,
      fat: 142,
      carbohydrates: 242,
      calories: 4242,
      price: 424,
      image: 'https://code.s3.yandex.net/react/code/meat-01.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
    }
  ],
  loading: false,
  error: null
};

export const mockUser = {
  user: {
    email: 'punkrat.klo@gmail.com',
    name: 'Саша'
  }
};

export const mockFeed = {
  orders: [
    {
      _id: '643d69a5c3f7b9001cfa0941',
      number: 64471,
      name: 'Краторная булка N-200i',
      status: 'done',
      updatedAt: '2024-12-26T19:03:33.179Z',
      createdAt: '2024-12-26T19:03:33.179Z',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093c'
      ]
    }
  ],
  total: 100,
  totalToday: 10
};

export const mockOrderByNumber = {
  orders: [
    {
      _id: '643d69a5c3f7b9001cfa0941',
      number: 64471,
      name: 'Краторный spicy био-марсианский бургер',
      status: 'done',
      updatedAt: '2024-07-13T22:50:50.662Z',
      createdAt: '2024-07-13T22:50:50.190Z',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093c'
      ]
    }
  ]
};

export const mockOrders = [
  {
    _id: '643d69a5c3f7b9001cfa0941',
    number: 64471,
    name: 'Краторный spicy био-марсианский бургер',
    status: 'done',
    updatedAt: '2024-07-13T22:50:50.662Z',
    createdAt: '2024-07-13T22:50:50.190Z',
    ingredients: [
      '643d69a5c3f7b9001cfa093c',
      '643d69a5c3f7b9001cfa0941',
      '643d69a5c3f7b9001cfa0942',
      '643d69a5c3f7b9001cfa093c'
    ]
  },
  {
    _id: '643d69a5c3f7b9001cfa0941',
    number: 64471,
    name: 'Флюоресцентный люминесцентный био-марсианский бургер',
    status: 'done',
    updatedAt: '2024-12-24T18:09:04.004Z',
    createdAt: '2024-12-24T18:09:03.528Z',
    ingredients: [
      '643d69a5c3f7b9001cfa093d',
      '643d69a5c3f7b9001cfa0941',
      '643d69a5c3f7b9001cfa093e',
      '643d69a5c3f7b9001cfa093d'
    ]
  }
];

export const mockOrder = {
  _id: '643d69a5c3f7b9001cfa0941',
  ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa093c'],
  status: 'done',
  name: 'Краторный бургер',
  number: 45988,
  updatedAt: '2024-12-18T18:59:48.340Z',
  createdAt: '2024-12-18T18:59:47.886Z'
};

export const mockBun = {
  _id: '643d69a5c3f7b9001cfa0941',
  name: 'Краторная булка N-200i',
  type: 'bun',
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
};

export const mockTopping = {
  _id: '643d69a5c3f7b9001cfa0941',
  name: 'Биокотлета из марсианской Магнолии',
  type: 'main',
  proteins: 420,
  fat: 142,
  carbohydrates: 242,
  calories: 4242,
  price: 424,
  image: 'https://code.s3.yandex.net/react/code/meat-01.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
};
