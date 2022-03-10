import { MobileDatePicker } from "@mui/lab";

import { AppBar, TextField, Toolbar, Button } from "@mui/material";
import Head from "next/head";
import ToolbarContent from "../components/ToolbarContent";
import {
  TodoWrite__performDateInputValueAtom,
  TodoWrite__bodyInputValueAtom,
} from "../states";
import { useRecoilState } from "recoil";
import { useTodosState } from "../hooks";
import { momentToFormat2 } from "../utils";

export default function Write() {
  const { writeTodo } = useTodosState();

  const [performDateInputValue, setPerformDateInputValue] = useRecoilState(
    TodoWrite__performDateInputValueAtom
  );

  const [bodyInputValue, setBodyInputValue] = useRecoilState(
    TodoWrite__bodyInputValueAtom
  );

  const submit = () => {
    if (performDateInputValue.trim().length == 0) {
      alert("언제 해야하는 일인지 날짜를 적어주세요.");
      return;
    }

    if (bodyInputValue.trim().length == 0) {
      alert("할일 내용을 입력해주세요.");
      return;
    }

    writeTodo(performDateInputValue.trim(), bodyInputValue.trim());
  };

  return (
    <>
      <Head>
        <title>작성 | 투두</title>
      </Head>

      <AppBar position="fixed">
        <Toolbar>
          <ToolbarContent></ToolbarContent>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <div className="flex-1 flex flex-col gap-6 p-6">
        <MobileDatePicker
          value={performDateInputValue}
          onChange={(newValue) =>
            setPerformDateInputValue(momentToFormat2(newValue))
          }
          label="언제 해야하나요?"
          inputFormat={"yyyy-MM-DD"}
          mask={"____-__-__"}
          renderInput={(params) => <TextField {...params} />}
        />
        <TextField
          className="flex-1 flex flex-col"
          InputProps={{ className: " flex-1 flex flex-col" }}
          inputProps={{ className: " flex-1" }}
          label="할일"
          placeholder="할일"
          multiline
          value={bodyInputValue}
          onChange={({ target: { value } }) => setBodyInputValue(value)}
        />
        <Button variant="contained" onClick={submit}>
          <span>할일추가</span>
          <span>&nbsp;</span>
          <i className="fa-solid fa-marker"></i>
        </Button>
      </div>
    </>
  );
}
