import React, { useEffect } from "react";
import useStore from "../store/store";
import "./playerCard.css";
import Grid from "@mui/material/Grid";

const PlayerCard = ({
  club,
  name,
  overall,
  position,
  pace,
  defending,
  dribbling,
  shooting,
  passing,
  physic,
  diving,
  handling,
  kicking,
  reflexes,
  positioning,
  speed,
}) => {
  return (
    <>
      <a className="card">
        <figure>
          <Grid container direction="row" justifyContent="left" marginTop="0px">
            <Grid item xs={4} className="overall" marginTop="-10px">
              <div>
                {overall}
                <br />
                {position}
              </div>
            </Grid>
            <Grid item xs={8} marginTop="-10px">
              <div>{club}</div>
            </Grid>

            <Grid
              item
              xs={12}
              className="name"
              marginTop="10px"
              marginBottom="10px"
              borderTop="2px solid black"
              borderBottom="2px solid black"
            >
              <h1>{name}</h1>
            </Grid>
            {position !== "GK" ? (
              <>
                <Grid item xs={6}>
                  pac: {pace}
                </Grid>
                <Grid item xs={6}>
                  dri: {dribbling}
                </Grid>
                <Grid item xs={6}>
                  sho: {shooting}
                </Grid>
                <Grid item xs={6}>
                  def: {defending}
                </Grid>
                <Grid item xs={6}>
                  pas: {passing}
                </Grid>
                <Grid item xs={6}>
                  phy: {physic}
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={6}>
                  div: {diving}
                </Grid>
                <Grid item xs={6}>
                  ref: {reflexes}
                </Grid>
                <Grid item xs={6}>
                  han: {handling}
                </Grid>
                <Grid item xs={6}>
                  spd: {speed}
                </Grid>
                <Grid item xs={6}>
                  kic: {kicking}
                </Grid>
                <Grid item xs={6}>
                  pos: {positioning}
                </Grid>
              </>
            )}
          </Grid>
        </figure>
      </a>
    </>
  );
};

export default PlayerCard;
