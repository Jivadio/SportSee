import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { getUserPerformance } from "../services/Api";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const RadarPerformance = () => {
  const id = 12;

  const { data, isError } = useQuery({
    queryKey: ["userPerformance", id],
    queryFn: () => getUserPerformance(id),
  });

  if (isError) {
    toast.error("Erreur lors de la récupération des données.");
  }

  return (
    <div className="performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "white", fontSize: 12, fontWeight: "500" }}
            offset={100}
          />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarPerformance;
