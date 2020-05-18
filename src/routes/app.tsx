import React from "react";
import { useSelector } from "react-redux";
import Routes from "./";
const routes: React.FC = () => {
  const { signed } = useSelector((state: any) => state.auth);
  return <Routes signed={signed} />;
};

export default routes;
