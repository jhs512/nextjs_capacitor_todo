import { MobileDateTimePicker } from "@mui/lab";

import { AppBar, TextField, Toolbar } from "@mui/material";
import Head from "next/head";
import Link from "../src/Link";
import ToolbarContent from "../components/ToolbarContent";
import { useState } from "react";

export default function Write() {
  const [value, setValue] = useState("");

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

      <div className="flex-1 flex flex-col p-10">
        <MobileDateTimePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
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
        />
      </div>
    </>
  );
}
