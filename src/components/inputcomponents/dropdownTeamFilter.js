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

export default function TeamSelectFilter({ clubName, setClubName }) {
  const handleChange = (event) => {
    setClubName(event.target.value);
  };

  const { players } = useStore((state) => state);

  const uniqueTeams = [...new Set(players.map((player) => player.club_name))];

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
          Team
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={clubName}
          label="Age"
          onChange={handleChange}
          style={styles}
        >
          {uniqueTeams.map((team) => {
            return <MenuItem value={team}>{team}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
