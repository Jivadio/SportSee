const baseURL = "http://localhost:3000/user";

export const getUserInformation = async (userid) => {
  try {
    const response = await fetch(`${baseURL}/${userid}`);

    if (response.ok) {
      const data = await response.json();
      return data.data.userInfos;
    } else {
      console.error("Erreur de requête: ", response.status);
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des données", error);
  }
};
