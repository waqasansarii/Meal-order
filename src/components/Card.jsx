import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import {  DeleteOutline } from "@mui/icons-material";

export default function ItemCard({
  data,
  week,
  isActive,
  handleDeletItem,
  handleSelect,
}) {

  return (
    <Card
      sx={{
        maxWidth: 310,
        borderRadius: "10px",
        border: isActive ? "2px solid #2c6481" : "2px solid transparent",
      }}
      component={"div"}
      onClick={() => handleSelect(data?.id)}
      //   key={data?.name}
    >
      <Box sx={{ padding: " 15px 15px 0px 15px", position: "relative" }}>
        {week ? (
          <Button
            sx={{
              position: "absolute",
              left: "22px",
              padding: "1px",
              backgroundColor: "white",
              top: "22px",
              fontSize: "10px",
              minWidth: "fit-content",
              ":hover": {
                backgroundColor: "white",
              },
            }}
            variant="contained"
            color="error"
            onClick={() => handleDeletItem(data)}
          >
            <DeleteOutline color="error" />
          </Button>
        ) : null}
        <CardMedia
          component="img"
          height="194"
          image={data?.image}
          alt="Paella dish"
          sx={{ borderRadius: "10px" }}
        />
        <Typography
          component={"p"}
          sx={{
            position: "absolute",
            right: "22px",
            borderRadius: "10px",
            padding: " 1px 15px",
            backgroundColor: "black",
            color: "white",
            top: "22px",
            fontSize: "10px",
          }}
        >
          {data?.mealType[0]}
        </Typography>
      </Box>
      <CardContent>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "700",
            textOverflow: "ellipsis",
            WebkitLineClamp: 1,
            // display: "block",
            whiteSpace: "nowrap",
            width: "80%",
            overflow: "hidden",
          }}
        >
          {data?.name}
        </Typography>
        <Box
          sx={{
            height: "190px",
            overflow: "hidden",
            marginTop: "8px",
            // textOverflow: "ellipsis",
            // WebkitLineClamp: 4,
            // display: "block",
            // whiteSpace: "nowrap",
          }}
        >
          {data?.instructions?.map((val) => (
            <Typography
              key={val}
              sx={{
                fontSize: "12px",
                // overflow: "hidden",
                // WebkitLineClamp: 4,
                // textOverflow: "ellipsis",
                // whiteSpace: "nowrap",
                // display:'block'
              }}
              variant="body2"
              color="text.secondary"
            >
              {val}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ fontSize: "11px" }}>
            <Typography
              component={"strong"}
              sx={{ fontSize: "11px", fontWeight: "700" }}
            >
              Cuisine
            </Typography>{" "}
            : {data?.cuisine}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              columnGap: "5px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>
              <Typography
                component={"strong"}
                sx={{ fontSize: "11px", fontWeight: "700" }}
              >
                Ratings
              </Typography>
              : {data?.rating}
            </Typography>
            <Box>
              {[1, 2, 3, 4].map((val, i) => (
                <StarIcon
                  key={val + i}
                  sx={{ fontSize: "15px", color: "#2c6481" }}
                />
              ))}
              {/* <StarIcon sx={{ fontSize: "15px" }} /> */}
              {/* <StarIcon sx={{ fontSize: "15px" }} /> */}
              {/* <StarIcon sx={{ fontSize: "15px" }} /> */}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
