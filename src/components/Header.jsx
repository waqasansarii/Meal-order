import { Box, Typography } from "@mui/material";
import React from "react";
import MealImg from "../assets/meal.jpg";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "220px",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img className="header_img" src={MealImg} alt="pizza" />
        <Typography component={"h2"} sx={{fontSize:'38px',fontWeight:'700',fontFamily:'sans-serif'}}>Optimized Your Meal</Typography>
        <Typography component={"p"} sx={{fontSize:'12px',marginTop:'5px'}} >
          Select Meal to add in Week. You will be able to edit, Modify and
          change the Meal Weeks.
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
