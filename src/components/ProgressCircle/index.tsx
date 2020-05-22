import React, { useEffect, useState } from "react";
import Svg, { Circle } from "react-native-svg";
import { Container, Title } from "./styles";
import { Text } from "react-native";
import { VictoryAnimation, VictoryLabel, VictoryPie } from "victory-native";
const ProgressCircle: React.FC = ({ percent = 0, color = 0 }: any) => {
  const [value, setValue] = useState(0);
  function getData(percent: any) {
    return [
      { x: 1, y: percent },
      { x: 2, y: 100 - percent },
    ];
  }
  useEffect(() => {
    setValue(parseFloat(percent));
  }, [[], percent]);
  return (
    <Container>
      <Svg viewBox="0 0 400 400" width="50" height="50">
        <VictoryPie
          standalone={false}
          animate={{ duration: 1200 }}
          width={400}
          height={400}
          data={getData(value)}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: {
              fill: ({ datum }) => {
                return datum.x === 1 ? color : "#ffffff09";
              },
            },
          }}
        />
        <VictoryAnimation duration={1000} data={value}>
          {(newProps: any) => {
            return (
              <VictoryLabel
                textAnchor="middle"
                verticalAnchor="middle"
                x={200}
                y={200}
                text={`${Math.round(newProps)}%`}
                style={{ fill: "white", fontSize: 70, fontWeight: "900" }}
              />
            );
          }}
        </VictoryAnimation>
      </Svg>
      {/* <Title>Variação do valor</Title> */}
    </Container>
  );
};
export default ProgressCircle;
