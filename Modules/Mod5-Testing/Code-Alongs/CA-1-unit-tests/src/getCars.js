const allCars = [
  {
    id: 1,
    model: "Camry",
    make: "Toyota",
  },
  {
    id: 2,
    model: "M5",
    make: "BMW",
  },
  {
    id: 3,
    model: "Model S",
    make: "Tesla",
  },
  {
    id: 4,
    model: "Model 3",
    make: "Tesla",
  },
];

export const getCarById = (id) => {
  return allCars.find((car) => car.id === id);
};

export const getAllCars = () => {
  return allCars;
};
