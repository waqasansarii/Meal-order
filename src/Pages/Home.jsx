import React, { useEffect } from "react";
import {  FullWidthTabs } from "../components";
import { Box } from "@mui/material";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import {  getAllMeals } from "../store/action/slice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMeals = async () => {
      dispatch(getAllMeals());
    };
    fetchMeals();
  }, []);

  return (
    <Box component={"div"} className="home_container">
      <Header />
      <FullWidthTabs />
    </Box>
  );
};

export default Home;
