import React from "react";
import pitch from "./pitch.png";
import "../pitch/pitch.css";
import useStore from "../store/store";
import Grid from "@mui/material/Grid";

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
      <Grid item container xs={8}>
        <div className="test">
          <main style={{ opacity: 1 }} className>
            <div className="static"></div>
            <div className="js-stage stage texture">
              <div
                style={{
                  opacity: 1,
                  transform: "translateZ(-200px) translateY(0px)",
                }}
                className="js-world world"
              >
                <div className="terrain js-terrain">
                  <div className="field field--alt" />
                  <div className="field ground">
                    <div className="field__texture field__texture--gradient" />
                    <div className="field__texture field__texture--gradient-b" />
                    <div className="field__texture field__texture--grass" />
                    <div className="allplayers">
                      <div className="field__line field__line--goal"></div>

                      <div className="field__line field__line--goal field__line--goal--far"></div>

                      <div className="gk">
                        {goalkeeper.gk?.short_name.split(".").pop()}{" "}
                        {goalkeeper.gk?.overall}
                      </div>
                      <div className="striker">
                        {striker.st?.short_name.split(".").pop()}{" "}
                        {striker.st?.overall}
                      </div>
                      <div className="rb">
                        {rightback.rb?.short_name.split(".").pop()}{" "}
                        {rightback.rb?.overall}
                      </div>
                      <div className="lb">
                        {leftback.lb?.short_name.split(".").pop()}{" "}
                        {leftback.lb?.overall}
                      </div>
                      <div className="cb">
                        {centerback.cb?.short_name.split(".").pop()}{" "}
                        {centerback.cb?.overall}
                      </div>
                      <div className="cb2">
                        {centerback2.cb?.short_name.split(".").pop()}{" "}
                        {centerback2.cb?.overall}
                      </div>
                      <div className="cdm">
                        {defmid.cdm?.short_name.split(".").pop()}{" "}
                        {defmid.cdm?.overall}
                      </div>
                      <div className="cm">
                        {centermid.cm?.short_name.split(".").pop()}{" "}
                        {centermid.cm?.overall}
                      </div>
                      <div className="cam">
                        {attmid.cam?.short_name.split(".").pop()}{" "}
                        {attmid.cam?.overall}
                      </div>
                      <div className="lw">
                        {lwing.lw?.short_name.split(".").pop()}{" "}
                        {lwing.lw?.overall}
                      </div>
                      <div className="rw">
                        {rwing.rw?.short_name.split(".").pop()}{" "}
                        {rwing.rw?.overall}
                      </div>

                      <div className="sub">
                        {sub.sub?.short_name.split(".").pop()}{" "}
                        {sub.sub?.overall}
                      </div>
                    </div>

                    <div className="field__line field__line--outline" />
                    <div className="field__line field__line--penalty" />
                    <div className="field__line field__line--penalty-arc" />
                    <div className="field__line field__line--penalty-arc field__line--penalty-arc--far" />
                    <div className="field__line field__line--mid" />
                    <div className="field__line field__line--circle" />
                    <div className="field__line field__line--penalty field__line--penalty--far" />
                  </div>
                  <div className="field__side field__side--front" />
                  <div className="field__side field__side--left" />
                  <div className="field__side field__side--right" />
                  <div className="field__side field__side--back" />
                </div>
              </div>
            </div>
          </main>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Grid>
    </>
  );
};

export default Pitch;
