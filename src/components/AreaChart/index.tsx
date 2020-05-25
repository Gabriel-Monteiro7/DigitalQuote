import React from "react";
import SVG from "react-native-svg";
import { VictoryArea, VictoryAxis } from "victory-native";
import { colors, hp } from "../../util";
const AreaChart: React.FC = ({ color, currency }: any) => {
  const max: any = parseFloat(currency.data.ask) * 2;
  return (
    <SVG width={hp(47)} height={hp(48)}>
      <VictoryArea
        height={hp(48)}
        standalone={false}
        labels={({ datum }) => datum.x}
        interpolation="natural"
        style={{
          data: {
            fill: colors[color],
            fillOpacity: 0.2,
            stroke: colors[color],
            strokeWidth: 2,
            marginLeft: 10,
          },
        }}
        x={(value: any, indice: any) => indice}
        y={(value) => parseFloat(value.ask)}
        data={currency?.variations || []}
        padding={{ left: 0, right: 240 - hp(19), bottom: 10, top: 10 }}
        domain={{ y: [0, max] }}
      />
      <VictoryAxis
        domain={{ y: [0, max] }}
        height={hp(48)}
        dependentAxis={true}
        tickFormat={(value) => {
          return value.toFixed(2);
        }}
        orientation={"right"}
        tickCount={10}
        style={{
          tickLabels: {
            fill: "#ffffff30",
            fontWeight: "bold",
            strokeWidth: 0,
            fontSize: 10,
            padding: 5,
          },
          axis: { strokeWidth: 0 },
          grid: { stroke: "#ffffff10", strokeWidth: 2 },
        }}
        padding={{ left: 0, right: 240 - hp(19), bottom: 10, top: 10 }}
      />
    </SVG>
  );
};
export default AreaChart;
