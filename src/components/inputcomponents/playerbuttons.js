import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";

const buttons = [];

export default function GroupSizesColors({
  chooseGk,
  chooseRb,
  chooseCb,
  chooseCb2,
  chooseLb,
  chooseCdm,
  chooseCm,
  chooseCam,
  chooseLw,
  chooseRw,
  chooseSt,
  chooseSub,
  randomize,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 2,
        },
      }}
    >
      <ButtonGroup size="large" aria-label="large button group">
        <Grid container direction="row" spacing={4}>
          <Grid item xs={4} md={2} lg={1}>
            <Button key="one" onClick={chooseGk}>
              GK
            </Button>
          </Grid>
          <Grid item xs={4} md={2} lg={1}>
            <Button key="two" onClick={chooseRb}>
              RB
            </Button>
          </Grid>
          <Grid item xs={4} md={2} lg={1}>
            <Button key="three" onClick={chooseCb}>
              CB
            </Button>
          </Grid>
          <Grid item xs={4} md={2} lg={1}>
            <Button key="four" onClick={chooseCb2}>
              CB
            </Button>
          </Grid>
          <Grid item xs={4} md={2} lg={1}>
            <Button key="five" onClick={chooseLb}>
              LB
            </Button>
          </Grid>
          <Grid item xs={4} md={2} lg={1}>
            <Button key="six" onClick={chooseCdm}>
              CDM
            </Button>
          </Grid>
          <Grid item xs={4} md={2} lg={1}>
            <Button key="seven" onClick={chooseCm}>
              CM
            </Button>
          </Grid>
          <Grid item xs={4} md={2} lg={1}>
            <Button key="eight" onClick={chooseCam}>
              CAM
            </Button>
          </Grid>
          <Grid item xs={4} md={2} lg={1}>
            <Button key="nine" onClick={chooseLw}>
              LW
            </Button>
          </Grid>
          <Grid item xs={4} md={2} lg={1}>
            <Button key="ten" onClick={chooseRw}>
              RW
            </Button>
          </Grid>
          <Grid item xs={4} md={2} lg={1}>
            <Button key="eleven" onClick={chooseSt}>
              ST
            </Button>
          </Grid>
          <Grid item xs={4} md={2} lg={1}>
            <Button key="twelve" onClick={chooseSub}>
              SUB
            </Button>
          </Grid>

          <Grid item xs={12} container justifyContent="center">
            <Button key="thirteen" onClick={randomize}>
              RANDOMIZE
            </Button>
          </Grid>
        </Grid>
      </ButtonGroup>
    </Box>
  );
}
