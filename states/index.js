import { atom } from "recoil";

import { recoilPersist } from "recoil-persist";
const { persistAtom: persistAtomCommon } = recoilPersist({
  key: "recoil-persist-common",
});
const { persistAtom: persistAtomTodos } = recoilPersist({
  key: "recoil-persist-todos",
});

export const TodoWrite__performDateInputValueAtom = atom({
  key: "app/TodoWrite__performDateInputValueAtom",
  default: "",
  effects_UNSTABLE: [persistAtomCommon],
});

export const TodoWrite__bodyInputValueAtom = atom({
  key: "app/TodoWrite__bodyInputValueAtom",
  default: "",
  effects_UNSTABLE: [persistAtomCommon],
});

export const todosAtom = atom({
  key: "app/todosAtom",
  default: [],
  effects_UNSTABLE: [persistAtomTodos],
});

export const todosLastIdAtom = atom({
  key: "app/todosLastIdAtom",
  default: 0,
  effects_UNSTABLE: [persistAtomTodos],
});
