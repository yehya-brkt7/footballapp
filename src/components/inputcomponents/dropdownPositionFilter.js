import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useStore from "../store/store";

const styles = {
  color: "gray",
};

export default function PositionSelectFilter({
  playerPosition,
  setPlayerPosition,
}) {
  const handleChange = (event) => {
    setPlayerPosition(event.target.value);
  };

  const { players } = useStore((state) => state);

  const uniquePositions = [
    ...new Set(players.map((player) => player.club_position)),
  ];

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
          Position
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={playerPosition}
          label="Age"
          onChange={handleChange}
          style={styles}
        >
          {uniquePositions.map((position) => {
            return <MenuItem value={position}>{position}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
