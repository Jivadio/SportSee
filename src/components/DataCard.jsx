import Card from "./Card";

import energy from "../images/card/energy.svg";
import protein from "../images/card/protein.svg";
import carbohydrate from "../images/card/carbohydrate.svg";
import lipid from "../images/card/lipid.svg";

export default function DataCard({ keydata }) {
  return (
    <div className="dashboard-right">
      <Card
        amount={keydata?.calorieCount}
        unit="kCal"
        subtitle="Calories"
        className="calorie"
        icon={energy}
      />
      <Card
        amount={keydata?.proteinCount}
        unit="g"
        subtitle="Proteines"
        className="protein"
        icon={protein}
      />
      <Card
        amount={keydata?.carbohydrateCount}
        unit="g"
        subtitle="Glucides"
        className="carbohydrate"
        icon={carbohydrate}
      />
      <Card
        amount={keydata?.lipidCount}
        unit="g"
        subtitle="Lipides"
        className="lipid"
        icon={lipid}
      />
    </div>
  );
}
