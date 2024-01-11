import UserInformation from "../components/UserInformation";
import React, { useEffect, useState } from "react";
import { getUserInformation } from "../services/Api";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    getUserInformation(id).then((response) => {
      setData(response);
    });
  }, []);
  return (
    <>
      <div className="profil container">
        <UserInformation firstname={data?.firstName} />
        <div className="dashboard">
            
        </div>
      </div>
    </>
  );
}
