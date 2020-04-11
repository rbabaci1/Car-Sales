export const defaultState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500, isAdded: false },
    { id: 2, name: 'Racing detail package', price: 1500, isAdded: false },
    { id: 3, name: 'Premium sound system', price: 500, isAdded: false },
    { id: 4, name: 'Rear spoiler', price: 250, isAdded: false },
  ],
};
