import React, { useEffect, useState } from "react";
import useStore from "../store/store";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";

const Stats = () => {
  const {
    goalkeeper,
    rightback,
    centerback,
    centerback2,
    leftback,
    defmid,
    centermid,
    attmid,
    lwing,
    rwing,
    striker,
    sub,
  } = useStore((state) => state);

  const [averageOverall, setAverageOverall] = useState(NaN);
  const [averagePace, setAveragePace] = useState(NaN);
  const [averageShooting, setAverageShooting] = useState(NaN);
  const [averagePassing, setAveragePassing] = useState(NaN);
  const [averageDribbling, setAverageDribbling] = useState(NaN);
  const [averageDefending, setAverageDefending] = useState(NaN);
  const [averagePhysical, setAveragePhysical] = useState(NaN);
  const [averageValue, setAverageValue] = useState(NaN);

  const [displayResults, setDisplayResults] = useState(false);

  const [disable, setDisable] = useState(true);

  const calculateAvg = () => {
    setDisplayResults(true);
  };

  useEffect(() => {
    const avgOverall =
      (goalkeeper?.gk?.overall +
        rightback?.rb?.overall +
        leftback?.lb?.overall +
        centerback?.cb?.overall +
        centerback2?.cb?.overall +
        defmid?.cdm?.overall +
        centermid?.cm?.overall +
        attmid?.cam?.overall +
        lwing?.lw?.overall +
        rwing?.rw?.overall +
        striker?.st?.overall +
        sub?.sub?.overall) /
      12;

    const avgPace =
      (rightback?.rb?.pace +
        leftback?.lb?.pace +
        centerback?.cb?.pace +
        centerback2?.cb?.pace +
        defmid?.cdm?.pace +
        centermid?.cm?.pace +
        attmid?.cam?.pace +
        lwing?.lw?.pace +
        rwing?.rw?.pace +
        striker?.st?.pace +
        sub?.sub?.pace) /
      11;

    const avgShooting =
      (rightback?.rb?.shooting +
        leftback?.lb?.shooting +
        centerback?.cb?.shooting +
        centerback2?.cb?.shooting +
        defmid?.cdm?.shooting +
        centermid?.cm?.shooting +
        attmid?.cam?.shooting +
        lwing?.lw?.shooting +
        rwing?.rw?.shooting +
        striker?.st?.shooting +
        sub?.sub?.shooting) /
      11;

    const avgPassing =
      (rightback?.rb?.passing +
        leftback?.lb?.passing +
        centerback?.cb?.passing +
        centerback2?.cb?.passing +
        defmid?.cdm?.passing +
        centermid?.cm?.passing +
        attmid?.cam?.passing +
        lwing?.lw?.passing +
        rwing?.rw?.passing +
        striker?.st?.passing +
        sub?.sub?.passing) /
      11;

    const avgDribbling =
      (rightback?.rb?.dribbling +
        leftback?.lb?.dribbling +
        centerback?.cb?.dribbling +
        centerback2?.cb?.dribbling +
        defmid?.cdm?.dribbling +
        centermid?.cm?.dribbling +
        attmid?.cam?.dribbling +
        lwing?.lw?.dribbling +
        rwing?.rw?.dribbling +
        striker?.st?.dribbling +
        sub?.sub?.dribbling) /
      11;

    const avgDefending =
      (rightback?.rb?.defending +
        leftback?.lb?.defending +
        centerback?.cb?.defending +
        centerback2?.cb?.defending +
        defmid?.cdm?.defending +
        centermid?.cm?.defending +
        attmid?.cam?.defending +
        lwing?.lw?.defending +
        rwing?.rw?.defending +
        striker?.st?.defending +
        sub?.sub?.defending) /
      11;

    const avgPhysical =
      (rightback?.rb?.physic +
        leftback?.lb?.physic +
        centerback?.cb?.physic +
        centerback2?.cb?.physic +
        defmid?.cdm?.physic +
        centermid?.cm?.physic +
        attmid?.cam?.physic +
        lwing?.lw?.physic +
        rwing?.rw?.physic +
        striker?.st?.physic +
        sub?.sub?.physic) /
      11;

    const avgValue =
      (goalkeeper?.gk?.value_eur +
        rightback?.rb?.value_eur +
        leftback?.lb?.value_eur +
        centerback?.cb?.value_eur +
        centerback2?.cb?.value_eur +
        defmid?.cdm?.value_eur +
        centermid?.cm?.value_eur +
        attmid?.cam?.value_eur +
        lwing?.lw?.value_eur +
        rwing?.rw?.value_eur +
        striker?.st?.value_eur +
        sub?.sub?.value_eur) /
      12;

    setAverageOverall(avgOverall);
    setAveragePace(avgPace);
    setAverageShooting(avgShooting);
    setAveragePassing(avgPassing);
    setAverageDribbling(avgDribbling);
    setAverageDefending(avgDefending);
    setAveragePhysical(avgPhysical);
    setAverageValue(avgValue);
  }, [
    goalkeeper,
    rightback,
    leftback,
    centerback,
    centerback2,
    defmid,
    centermid,
    attmid,
    lwing,
    rwing,
    striker,
    sub,
  ]);

  useEffect(() => {
    Number.isNaN(averageOverall) ? setDisable(true) : setDisable(false);
  }, [averageOverall]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          "& > *": {
            m: 2,
          },
        }}
      >
        <ButtonGroup
          size="large"
          color="secondary"
          aria-label="large button group"
          disabled={disable}
        >
          <Button key="eight" onClick={calculateAvg}>
            Calculate Averages
          </Button>
        </ButtonGroup>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="left"
        textAlign="left"
        marginLeft="25px"
      >
        <Grid item xs={6}>
          Average Overall:
          {displayResults ? parseInt(averageOverall, 10) : " "}
          <br></br>
          Average Pace:
          {displayResults ? parseInt(averagePace, 10) : " "}
          <br></br>
          Average Shooting:
          {displayResults ? parseInt(averageShooting, 10) : " "}
          <br></br>
          Average Passing:
          {displayResults ? parseInt(averagePassing, 10) : " "}
          <br></br>
          Average Dribbling:
          {displayResults ? parseInt(averageDribbling, 10) : " "}
          <br></br>
          Average Defending:
          {displayResults ? parseInt(averageDefending, 10) : " "}
          <br></br>
          Average Physical:
          {displayResults ? parseInt(averagePhysical, 10) : " "}
          <br></br>
          <br></br>
          Average Value:
          {displayResults ? String(averageValue).slice(0, 2) + " M €" : " "}
        </Grid>
      </Grid>
    </>
  );
};

export default Stats;
