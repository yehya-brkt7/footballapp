import axios from "axios";
import React from "react";
import create from "zustand";

const useStore = create((set) => ({
  players: [],

  goalkeeper: {},
  rightback: {},
  centerback: {},
  centerback2: {},
  leftback: {},
  defmid: {},
  centermid: {},
  attmid: {},
  lwing: {},
  rwing: {},
  striker: {},
  sub: {},

  setGk: (goalkeeper) => set({ goalkeeper }),
  setRb: (rightback) => set({ rightback }),
  setCb: (centerback) => set({ centerback }),
  setCb2: (centerback2) => set({ centerback2 }),
  setLb: (leftback) => set({ leftback }),
  setCdm: (defmid) => set({ defmid }),
  setCm: (centermid) => set({ centermid }),
  setCam: (attmid) => set({ attmid }),
  setLw: (lwing) => set({ lwing }),
  setRw: (rwing) => set({ rwing }),
  setSt: (striker) => set({ striker }),
  setSub: (sub) => set({ sub }),

  fetch: async (url) => {
    const response = await axios.get(url);
    set({ players: await response.data });
  },
}));

export default useStore;
