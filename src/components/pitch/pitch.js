import React from "react";
import useStore from "../store/store";
import Grid from "@mui/material/Grid";
import Shirt from "../Shirt/shirt";
import "../Shirt/shirt.css";

const Pitch = () => {
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

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        marginBottom="100px"
      >
        <Grid
          item
          container
          justifyContent="row"
          xs={10}
          border="5px solid white"
        >
          <Grid item xs={5}></Grid>
          <Grid
            item
            xs={2}
            container
            justifyContent="center"
            zIndex="100"
            color="white"
          >
            <div className="player" id="player">
              <Shirt />
              {striker.st?.short_name.split(".").pop()} {striker.st?.overall}
            </div>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid
            item
            xs={3.4}
            container
            justifyContent="center"
            zIndex="100"
            color="white"
            marginTop="-21px"
          >
            <div className="player" id="player">
              <Shirt />
              {lwing.lw?.short_name.split(".").pop()} {lwing.lw?.overall}
            </div>
          </Grid>
          <Grid item xs={5.2}></Grid>
          <Grid
            item
            xs={3.4}
            container
            justifyContent="center"
            zIndex="100"
            color="white"
            marginTop="-21px"
          >
            <div className="player" id="player">
              <Shirt position={rwing} />
              {rwing.rw?.short_name.split(".").pop()} {rwing.rw?.overall}
            </div>
          </Grid>

          <Grid item xs={1.5}></Grid>
          <Grid
            item
            xs={3}
            container
            justifyContent="center"
            zIndex="100"
            color="white"
            marginTop="60px"
          >
            <div className="player" id="player">
              <Shirt />
              {centermid.cm?.short_name.split(".").pop()}{" "}
              {centermid.cm?.overall}
            </div>
          </Grid>
          <Grid
            item
            xs={3}
            container
            justifyContent="center"
            zIndex="100"
            color="white"
            marginTop="30px"
          >
            <div className="player" id="player">
              <Shirt position={attmid} />
              {attmid.cam?.short_name.split(".").pop()} {attmid.cam?.overall}
            </div>
          </Grid>
          <Grid
            item
            xs={3}
            container
            justifyContent="center"
            zIndex="100"
            color="white"
            marginTop="60px"
          >
            <div className="player" id="player">
              <Shirt />
              {defmid.cdm?.short_name.split(".").pop()} {defmid.cdm?.overall}
            </div>
          </Grid>
          <Grid item xs={1.5}></Grid>

          <Grid
            item
            xs={3}
            container
            justifyContent="center"
            zIndex="100"
            color="white"
            marginTop="60px"
          >
            <div className="player" id="player">
              <Shirt />
              {leftback.lb?.short_name.split(".").pop()} {leftback.lb?.overall}
            </div>
          </Grid>
          <Grid
            item
            xs={3}
            container
            justifyContent="center"
            zIndex="100"
            color="white"
            marginTop="60px"
          >
            <div className="player" id="player">
              <Shirt />
              {centerback.cb?.short_name.split(".").pop()}{" "}
              {centerback.cb?.overall}
            </div>
          </Grid>
          <Grid
            item
            xs={3}
            container
            justifyContent="center"
            zIndex="100"
            color="white"
            marginTop="60px"
          >
            <div className="player" id="player">
              <Shirt />
              {centerback2.cb?.short_name.split(".").pop()}{" "}
              {centerback2.cb?.overall}
            </div>
          </Grid>
          <Grid
            item
            xs={3}
            container
            justifyContent="center"
            zIndex="100"
            color="white"
            marginTop="60px"
          >
            <div className="player" id="player">
              <Shirt />
              {rightback.rb?.short_name.split(".").pop()}{" "}
              {rightback.rb?.overall}
            </div>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid
            item
            xs={2}
            container
            justifyContent="center"
            zIndex="100"
            color="white"
            marginTop="-10px"
          >
            <div className="player" id="player">
              <Shirt />
              {goalkeeper.gk?.short_name.split(".").pop()}{" "}
              {goalkeeper.gk?.overall}
            </div>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={11}
        container
        justifyContent="right"
        zIndex="100"
        color="white"
        marginTop="-50px"
        marginBottom="100px"
      >
        <div className="player" id="player">
          <Shirt />
          {sub.sub?.short_name.split(".").pop()} {sub.sub?.overall}
        </div>
      </Grid>
    </>
  );
};

export default Pitch;
