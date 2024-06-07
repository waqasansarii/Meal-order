import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { addMeal } from "../store/action/slice";

export default function WeekDialog() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const isSelected = useSelector((state) => {
    return state.meal.selectedMeal;
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [week, setWeek] = React.useState("week1");
  const handleWeekSelect = (e, i) => {
    const replaceNum = e.replace(" ", "");
    setWeek(replaceNum);
  };

  const handleAdd = () => {
    if (isSelected) {
      dispatch(addMeal({ week: week.replace(" ", ""), mealId: isSelected }));
      setOpen(false);
    } else {
      alert("Please select a meal");
    }
  };
  return (
    <React.Fragment>
      <Button
        // variant="text"
        sx={{
          background: "#2c6481",
          color: "white",
          fontSize: "11px",
          padding: "6px 40px",
          borderRadius: "5px",
          minHeight: "fit-content",
          ":hover": {
            backgroundColor: "#2c6481",
            color: "white",
            opacity: "0.7",
          },
        }}
        onClick={handleClickOpen}
      >
        Add to week
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
        // sx={{paddingY:'30px'}}
      >
        <DialogTitle sx={{ textAlign: "center", marginTop: "20px" }}>
          Select Week
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              columnGap: "15px",
            }}
          >
            {["week 1", "week 2", "week 3", "week 4"].map((val, ind) => (
              <Button
                onClick={() => handleWeekSelect(val, ind)}
                key={ind}
                sx={{
                  background:
                    week === val.replace(" ", "") ? "#c8e8fb" : "#e0e2e4",
                  color: "black",
                  textTransform: "capitalize",
                  padding: "8px 25px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  ":hover": {
                    background:
                      week === val.replace(" ", "") ? "#c8e8fb" : "#e0e2e4",
                    color: "black",
                    opacity: "0.7",
                  },
                }}
              >
                {val}
              </Button>
            ))}
          </Box>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          ></Box>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleAdd}
            sx={{
              background: "#2c6481",
              color: "white",
              fontSize: "12px",
              padding: "8px 40px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
