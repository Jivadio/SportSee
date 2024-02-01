import { useQuery } from "@tanstack/react-query";
import UserInformation from "../components/UserInformation";
import {
  getUserInformation,
  getUserActivity,
  getUserPerformance,
  getUserSession,
} from "../services/Api";
import toast from "react-hot-toast";

import Activity from "../components/Activity/Activity";
import DataCard from "../components/DataCard";
import Score from "../components/Score";
import RadarPerformance from "../components/RadarPerformance";
import Session from "../components/Session/Session";

export default function Home() {
  const id = 12;

  const { data, isError } = useQuery({
    queryKey: ["userInformation", id],
    queryFn: () => getUserInformation(id),
  });

  const calculatedScore = data?.todayScore
    ? data.todayScore * 100
    : data?.score * 100;

  if (isError) {
    toast.error("Erreur lors de la récupération des données.");
  }

  const { data: dataActivity, isError: isErrorActivity } = useQuery({
    queryKey: ["userActivity", id],
    queryFn: () => getUserActivity(id),
  });

  if (isErrorActivity) {
    toast.error("Erreur lors de la récupération des données.");
  }

  const { data: dataSession, isError: isErrorSession } = useQuery({
    queryKey: ["userSession", id],
    queryFn: () => getUserSession(id),
  });

  if (isErrorSession) {
    toast.error("Erreur lors de la récupération des données.");
  }

  const { data: dataPerf, isError: isErrorPerf } = useQuery({
    queryKey: ["userPerformance", id],
    queryFn: () => getUserPerformance(id),
  });

  if (isErrorPerf) {
    toast.error("Erreur lors de la récupération des données.");
  }

  return (
    <>
      <div className="profil container">
        <UserInformation firstname={data?.userInfos?.firstName} />
        <div className="dashboard">
          <div className="dashboard-activity">
            <Activity data={dataActivity} />
            <div className="dashboard-bottom">
              <Session data={dataSession} />
              <RadarPerformance data={dataPerf} />
              <Score score={calculatedScore} />
            </div>
          </div>
          <div className="">
            <DataCard keydata={data?.keyData} />
          </div>
        </div>
      </div>
    </>
  );
}
