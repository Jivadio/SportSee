import { getUserDataCard } from "../services/Api";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Card from "./Card";

import energy from "../images/card/energy.svg";
import protein from "../images/card/protein.svg";
import carbohydrate from "../images/card/carbohydrate.svg";
import lipid from "../images/card/lipid.svg";

const DataCard = () => {
  const id = 12;

  const { data, isError, error } = useQuery({
    queryKey: ["getUserDataCard", id],
    queryFn: () => getUserDataCard(id),
  });

  if (isError) {
    toast.error("Erreur lors de la récupération des données.");
  }

  return (
    <div className="dashboard-right">
      <Card
        amount={data?.calorieCount}
        unit="kCal"
        subtitle="Calories"
        className="calorie"
        icon={energy}
      />
      <Card
        amount={data?.proteinCount}
        unit="g"
        subtitle="Proteines"
        className="protein"
        icon={protein}
      />
      <Card
        amount={data?.carbohydrateCount}
        unit="g"
        subtitle="Glucides"
        className="carbohydrate"
        icon={carbohydrate}
      />
      <Card
        amount={data?.lipidCount}
        unit="g"
        subtitle="Lipides"
        className="lipid"
        icon={lipid}
      />
    </div>
  );
};

export default DataCard;
