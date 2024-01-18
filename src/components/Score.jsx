import { getUserScore } from "../services/Api";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { RadialBar, RadialBarChart } from "recharts";

const Score = () => {
  const id = 12;

  const {
    data: rawData,
    isError,
    error,
  } = useQuery({
    queryKey: ["getUserScore", id],
    queryFn: () => getUserScore(id),
  });

  if (isError) {
    toast.error("Erreur lors de la récupération des données.");
  }

  const data = rawData ?? 0;

  const dataChart = [
    {
      name: "score",
      value: data,
      fill: "#FF0000",
    },
  ];

  return (
    <div className="score">
      <h3 className="score-title">Score</h3>

      <RadialBarChart
        data={dataChart}
        width={200}
        height={200}
        innerRadius={87}
        outerRadius={200}
        barSize={10}
        startAngle={215}
        endAngle={215 + -((data * 360) / 100)}
      >
        <RadialBar
          dataKey="value"
          cornerRadius={5}
          label={false}
          style={{ fill: "red" }}
        />
        <circle cx={100} cy={100} r={82} fill="white" />
        <text x={100} y={100} textAnchor="middle">
          <tspan fontWeight={"bold"} fontSize={26} fill={"#282D30"}>
            {data ? `${data}%` : "Chargement..."}
          </tspan>
          <tspan fontSize={18} x={100} dy={26} fill={"#74798C"}>
            de votre
          </tspan>
          <tspan fontSize={18} x={100} dy={26} fill={"#74798C"}>
            objectif
          </tspan>
        </text>
      </RadialBarChart>
    </div>
  );
};

export default Score;
