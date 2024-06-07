import { Box } from "@mui/material";
import React from "react";
import { Card } from ".";
import { useDispatch, useSelector } from "react-redux";
import { deleteMeal, selectAMeal } from "../store/action/slice";

const TabsBody = ({ data, isWeek,tab }) => {
   const dispatch = useDispatch()
  const mealsState = useSelector((state) => {
    return state.meal;
  });

  const handleSelect = (e) => {
    dispatch(selectAMeal(e));
  };
  const handleDeletItem = (e)=>{
    dispatch(deleteMeal({week:tab,item:e}))
  }

  return (
    <Box
      sx={{
        columnGap: "25px",
        rowGap: "30px",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
      }}
    >
      {data?.map((item,ind) => (
        <Card
          key={ind}
          isActive={mealsState.selectedMeal === item?.id}
          data={item}
          week={isWeek}
          handleDeletItem={handleDeletItem}
          handleSelect={handleSelect}
        />
      ))}
    </Box>
  );
};

export default TabsBody;
