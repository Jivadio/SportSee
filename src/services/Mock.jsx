export const mockUserInformation = {
  id: 0,
  userInfos: {
    firstName: "Malo",
    lastName: "MARTIN",
    age: 21,
  },
  todayScore: 0.97,
  keyData: {
    calorieCount: 2000,
    proteinCount: 1999,
    carbohydrateCount: 1998,
    lipidCount: 1997,
  },
};

export const mockUserActivity = {
  userId: 0,
  sessions: [
    { day: "2020-07-01", kilogram: 33, calories: 345 },
    { day: "2020-07-02", kilogram: 45, calories: 674 },
    { day: "2020-07-03", kilogram: 12, calories: 234 },
    { day: "2020-07-04", kilogram: 40, calories: 645 },
    { day: "2020-07-05", kilogram: 44, calories: 999 },
    { day: "2020-07-06", kilogram: 23, calories: 798 },
    { day: "2020-07-07", kilogram: 23, calories: 345 },
  ],
};

export const mockUserPerformance = {
  userId: 12,
  kind: {
    1: "cardio",
    2: "energy",
    3: "endurance",
    4: "strength",
    5: "speed",
    6: "intensity",
  },
  data: [
    { value: 10, kind: 1 },
    { value: 20, kind: 2 },
    { value: 30, kind: 3 },
    { value: 40, kind: 4 },
    { value: 50, kind: 5 },
    { value: 60, kind: 6 },
  ],
};

export const mockUserSession = {
  userId: 12,
  sessions: [
    { day: 1, sessionLength: 10 },
    { day: 2, sessionLength: 5 },
    { day: 3, sessionLength: 20 },
    { day: 4, sessionLength: 10 },
    { day: 5, sessionLength: 40 },
    { day: 6, sessionLength: 20 },
    { day: 7, sessionLength: 80 },
  ],
};
