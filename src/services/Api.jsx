import toast from "react-hot-toast";

const baseURL = "http://localhost:3000/user";

export const getUserInformation = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`);

    if (response.ok) {
      const data = await response.json();
      return data.data.userInfos;
    } else {
      toast.error("Erreur lors de la récupération des données.");
    }
  } catch (error) {
    toast.error(`Erreur : ` + error.message);
  }
};

export const getUserActivity = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}/activity`);

    if (response.ok) {
      const data = await response.json();

      const transformedSessions = data.data.sessions.map((session, index) => ({
        ...session,
        day: index + 1,
      }));

      return transformedSessions;
    } else {
      toast.error("Erreur lors de la récupération des données.");
    }
  } catch (error) {
    toast.error(`Erreur : ${error.message}`);
  }
};

export const getUserDataCard = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`);

    if (response.ok) {
      const data = await response.json();
      return data.data.keyData;
    } else {
      toast.error("Erreur lors de la récupération des données.");
    }
  } catch (error) {
    toast.error(`Erreur : ` + error.message);
  }
};

export const getUserScore = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`);

    if (response.ok) {
      const data = await response.json();
      return data.data.todayScore * 100;
    } else {
      toast.error("Erreur lors de la récupération des données.");
    }
  } catch (error) {
    toast.error(`Erreur : ` + error.message);
  }
};

export const getUserPerformance = async (id) => {
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
      toast.error("Erreur lors de la récupération des données.");
      return [];
    }
  } catch (error) {
    toast.error(`Erreur : ${error.message}`);
    return [];
  }
};

export const getUserSession = async (id) => {
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
    } else {
      toast.error("Erreur lors de la récupération des données.");
    }
  } catch (error) {
    toast.error(`Erreur : ${error.message}`);
  }
};
