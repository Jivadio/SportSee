import { useQuery } from "@tanstack/react-query";
import UserInformation from "../components/UserInformation";
import { getUserInformation } from "../services/Api";
import toast from "react-hot-toast";

import Activity from "../components/Activity/Activity";
import DataCard from "../components/DataCard";
import Score from "../components/Score";
import RadarPerformance from "../components/RadarPerformance";
import Session from "../components/Session/Session";

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
            <div className="dashboard-bottom">
              <Session />
              <RadarPerformance />
              <Score />
            </div>
          </div>
          <div className="">
            <DataCard />
          </div>
        </div>
      </div>
    </>
  );
}
