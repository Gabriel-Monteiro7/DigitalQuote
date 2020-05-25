import React from "react";
import { VictoryArea, VictoryGroup } from "victory-native";
import { colors, hp, wp } from "../../util";
const AreaGroup: React.FC = ({ color, currency }: any) => {
  return (
    <VictoryGroup
      standalone={true}
      width={wp(65)}
      height={hp(27)}
      padding={0}
      maxDomain={{
        y:
          currency.data !== undefined ? parseFloat(currency.data?.high) * 2 : 0,
      }}
      minDomain={{ x: 0, y: 0 }}
    >
      <VictoryArea
      
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
      />
    </VictoryGroup>
  );
};
export default AreaGroup;
