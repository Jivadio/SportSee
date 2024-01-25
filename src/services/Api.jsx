import {
  mockUserInformation,
  mockUserActivity,
  mockUserPerformance,
  mockUserSession,
} from "./Mock";

const baseURL = "http://localhost:3000/user";

const useMock = true;

export const getUserInformation = async (id) => {
  if (useMock) {
    return mockUserInformation;
  }

  try {
    const response = await fetch(`${baseURL}/${id}`);

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserActivity = async (id) => {
  if (useMock) {
    return mockUserActivity.sessions.map((session, index) => ({
      ...session,
      day: index + 1,
    }));
  }

  try {
    const response = await fetch(`${baseURL}/${id}/activity`);

    if (response.ok) {
      const data = await response.json();
      const transformedSessions = data.data.sessions.map((session, index) => ({
        ...session,
        day: index + 1,
      }));

      return transformedSessions;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserPerformance = async (id) => {
  if (useMock) {
    const kindMapping = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };

    return mockUserPerformance.data
      .map((item) => ({
        ...item,
        kind: kindMapping[item.kind] || item.kind,
      }))
      .reverse();
  }
  try {
    const response = await fetch(`${baseURL}/${id}/performance`);

    if (response.ok) {
      const responseData = await response.json();

      const kindMapping = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité",
      };

      if (Array.isArray(responseData.data.data)) {
        const transformedData = responseData.data.data.map((item) => ({
          ...item,
          kind: kindMapping[item.kind] || item.kind,
        }));
        return transformedData.reverse();
      } else {
        return [];
      }
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getUserSession = async (id) => {
  if (useMock) {
    const dayMapping = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D",
    };

    return mockUserSession.sessions.map((session) => ({
      ...session,
      day: dayMapping[session.day],
    }));
  }
  try {
    const response = await fetch(`${baseURL}/${id}/average-sessions`);

    if (response.ok) {
      const data = await response.json();

      const dayMapping = {
        1: "L",
        2: "M",
        3: "M",
        4: "J",
        5: "V",
        6: "S",
        7: "D",
      };

      const transformedSessions = data.data.sessions.map((session) => ({
        ...session,
        day: dayMapping[session.day],
      }));

      return transformedSessions;
    }
  } catch (error) {
    console.log(error);
  }
};
