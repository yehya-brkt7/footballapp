import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useStore from "../store/store";

const styles = {
  color: "gray",
};

export default function RatingSelectFilter({ Rating, setRating }) {
  const { players } = useStore((state) => state);

  const uniqueRatings = [...new Set(players.map((player) => player.overall))];

  const handleChange = (event) => {
    setRating(event.target.value);
  };

  return (
    <Box
      sx={{
        minWidth: 120,
        boxShadow: 2,
        color: "white",
      }}
    >
      <FormControl fullWidth>
        <InputLabel style={styles} id="demo-simple-select-label">
          Rating
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Rating}
          label="Age"
          onChange={handleChange}
          style={styles}
        >
          {uniqueRatings.map((rating) => {
            return <MenuItem value={rating}>{rating}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
