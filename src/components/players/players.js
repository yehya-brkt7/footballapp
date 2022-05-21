import React, { useState, useEffect } from "react";
import PlayerCard from "../playerCard/playerCard";
import useStore from "../store/store";
import Grid from "@mui/material/Grid";
import LoaderDemo from "../inputcomponents/loader";
import GroupSizesColors from "../inputcomponents/playerbuttons";

const PlayerNames = () => {
  const {
    players,
    fetch,
    setGk,
    setRb,
    setCb,
    setCb2,
    setLb,
    setCdm,
    setCm,
    setCam,
    setLw,
    setRw,
    setSt,
    setSub,
  } = useStore((state) => state);

  const [goalkeepers, setGoalkeepers] = useState([]);
  const [rightbacks, setRightbacks] = useState([]);
  const [leftbacks, setLeftbacks] = useState([]);
  const [centerbacks, setCenterbacks] = useState([]);
  const [defmids, setDefmids] = useState([]);
  const [centermids, setCentermids] = useState([]);
  const [attmids, setAttmids] = useState([]);
  const [lwings, setLwings] = useState([]);
  const [rwings, setRwings] = useState([]);
  const [strikers, setStrikers] = useState([]);
  const [subs, setSubs] = useState([]);

  const [loading, setloading] = useState(false);

  const url = "playerlist.json";

  useEffect(() => {
    fetch(url);
  }, []);

  //filter per position
  useEffect(() => {
    //goalkeepers
    const goalkeeperslist = players.filter(
      (player) => player.club_position === "GK"
    );
    setGoalkeepers(goalkeeperslist);

    //rightbacks
    const rightbacklist = players.filter(
      (player) => player.club_position === "RB"
    );
    setRightbacks(rightbacklist);

    //centerbacks
    const centerbackslist = players.filter(
      (player) =>
        player.club_position === "LCB" || player.club_position === "RCB"
    );
    setCenterbacks(centerbackslist);

    //leftbacks
    const leftbacklist = players.filter(
      (player) => player.club_position === "LB"
    );
    setLeftbacks(leftbacklist);

    //defmids
    const defmidslist = players.filter(
      (player) => player.club_position === "CDM"
    );
    setDefmids(defmidslist);

    //centermids
    const centermidslist = players.filter(
      (player) =>
        player.club_position === "RCM" || player.club_position === "LCM"
    );
    setCentermids(centermidslist);

    //attmids
    const attmidslist = players.filter(
      (player) => player.club_position === "CAM"
    );
    setAttmids(attmidslist);

    //lwings
    const lwingslist = players.filter(
      (player) => player.club_position === "LW"
    );
    setLwings(lwingslist);

    //rwings
    const rwingslist = players.filter(
      (player) => player.club_position === "RW"
    );
    setRwings(rwingslist);

    //strikers
    const strikerslist = players.filter(
      (player) => player.club_position === "ST"
    );
    setStrikers(strikerslist);

    //subs
    const subslist = players.filter((player) => player.club_position === "SUB");
    setSubs(subslist);
  }, [players]);

  //function to choose 1 keeper
  const chooseGk = () => {
    setloading(true);

    //assign player
    const chosengk =
      goalkeepers[Math.floor(Math.random() * goalkeepers.length)];
    setGk({ gk: chosengk });
    setTimeout(() => {
      setloading(false);
    }, 1500);
  };

  //function to choose 1 rightback
  const chooseRb = () => {
    setloading(true);

    //assign player
    const chosenrb = rightbacks[Math.floor(Math.random() * rightbacks.length)];
    setRb({ rb: chosenrb });
    setTimeout(() => {
      setloading(false);
    }, 1500);
  };

  //function to choose 1 left back
  const chooseLb = () => {
    setloading(true);

    //assign player
    const chosenlb = leftbacks[Math.floor(Math.random() * leftbacks.length)];
    setLb({ lb: chosenlb });
    setTimeout(() => {
      setloading(false);
    }, 1500);
  };

  //function to choose 1 centerback
  const chooseCb = () => {
    setloading(true);

    //assign player
    const chosencb =
      centerbacks[Math.floor(Math.random() * centerbacks.length)];
    setCb({ cb: chosencb });
    setTimeout(() => {
      setloading(false);
    }, 1500);
  };

  //function to choose second center back
  const chooseCb2 = () => {
    setloading(true);

    //assign player
    const chosencb2 =
      centerbacks[Math.floor(Math.random() * centerbacks.length)];
    setCb2({ cb: chosencb2 });
    setTimeout(() => {
      setloading(false);
    }, 1500);
  };

  //function to choose 1 cdm
  const chooseCdm = () => {
    setloading(true);

    //assign player
    const chosencdm = defmids[Math.floor(Math.random() * defmids.length)];
    setCdm({ cdm: chosencdm });
    setTimeout(() => {
      setloading(false);
    }, 1500);
  };

  //function to choose 1 cm
  const chooseCm = () => {
    setloading(true);

    //assign player
    const chosencm = centermids[Math.floor(Math.random() * centermids.length)];
    setCm({ cm: chosencm });
    setTimeout(() => {
      setloading(false);
    }, 1500);
  };

  //function to choose 1 cam
  const chooseCam = () => {
    setloading(true);

    //assign player
    const chosencam = attmids[Math.floor(Math.random() * attmids.length)];
    setCam({ cam: chosencam });
    setTimeout(() => {
      setloading(false);
    }, 1500);
  };

  //function to choose 1 lwing
  const chooseLw = () => {
    setloading(true);

    //assign player
    const chosenlw = lwings[Math.floor(Math.random() * lwings.length)];
    setLw({ lw: chosenlw });
    setTimeout(() => {
      setloading(false);
    }, 1500);
  };

  //function to choose 1 rwing
  const chooseRw = () => {
    setloading(true);

    //assign player
    const chosenrw = rwings[Math.floor(Math.random() * rwings.length)];
    setRw({ rw: chosenrw });
    setTimeout(() => {
      setloading(false);
    }, 1500);
  };

  //function to choose 1 striker
  const chooseSt = () => {
    setloading(true);

    //assign striker
    const chosest = strikers[Math.floor(Math.random() * strikers.length)];
    setSt({ st: chosest });
    setTimeout(() => {
      setloading(false);
    }, 1500);
  };

  //function to choose 1 sub
  const chooseSub = () => {
    setloading(true);

    //assign player
    const chosensub = subs[Math.floor(Math.random() * subs.length)];
    setSub({ sub: chosensub });
    setTimeout(() => {
      setloading(false);
    }, 1500);
  };

  return (
    <>
      <div>
        {loading ? <LoaderDemo /> : <></>}
        <GroupSizesColors
          chooseGk={chooseGk}
          chooseRb={chooseRb}
          chooseCb={chooseCb}
          chooseCb2={chooseCb2}
          chooseLb={chooseLb}
          chooseCdm={chooseCdm}
          chooseCm={chooseCm}
          chooseCam={chooseCam}
          chooseRw={chooseRw}
          chooseLw={chooseLw}
          chooseSt={chooseSt}
          chooseSub={chooseSub}
        />

        <Grid container direction="row" justifyContent="center">
          {Array.isArray(players) &&
            players.map((player) => {
              return (
                <>
                  <Grid item xs={10} sm={6} md={3}>
                    <PlayerCard
                      club={player.club_name}
                      position={player.club_position}
                      name={player.short_name}
                      overall={player.overall}
                      pace={player.pace}
                      dribbling={player.dribbling}
                      passing={player.passing}
                      shooting={player.shooting}
                      physic={player.physic}
                      defending={player.defending}
                      diving={player.goalkeeping_diving}
                      handling={player.goalkeeping_handling}
                      kicking={player.goalkeeping_kicking}
                      reflexes={player.goalkeeping_reflexes}
                      positioning={player.goalkeeping_positioning}
                      speed={player.goalkeeping_speed}
                    />
                  </Grid>
                </>
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export default PlayerNames;
