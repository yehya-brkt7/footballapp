import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const styles = {
  color: "gray",
};

export default function BasicSelect({
  option,
  setOption,
  loading,
  setloading,
}) {
  //   const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 500);
  };

  useEffect(() => {
    console.log("loader", loading);
  }, [loading]);

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
          Filter by
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Age"
          onChange={handleChange}
          style={styles}
        >
          <MenuItem value="club_name">Team</MenuItem>
          <MenuItem value="overall">Rating</MenuItem>
          <MenuItem value="club_position">Position</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
