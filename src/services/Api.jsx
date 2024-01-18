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
      return data.data;
    } else {
      toast.error("Erreur lors de la récupération des données.");
    }
  } catch (error) {
    toast.error(`Erreur : ` + error.message);
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
