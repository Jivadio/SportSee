import { useQuery } from "@tanstack/react-query";
import UserInformation from "../components/UserInformation";
import { getUserInformation } from "../services/Api";
import toast from "react-hot-toast";

import Activity from "../components/Activity";

export default function Home() {
  const id = 12;

  const { data, isError, error } = useQuery({
    queryKey: ["userInformation", id],
    queryFn: () => getUserInformation(id),
  });

  if (isError) {
    toast.error("Erreur lors de la récupération des données.");
  }

  return (
    <>
      <div className="profil container">
        <UserInformation firstname={data?.firstName} />
        <div className="dashboard">
          <div className="dashboard-activity">
            <Activity />
          </div>
        </div>
      </div>
    </>
  );
}
