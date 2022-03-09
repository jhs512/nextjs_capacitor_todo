import { AppBar, Button, Toolbar } from "@mui/material";
import Head from "next/head";
import Link from "../src/Link";
import ToolbarContent from "../components/ToolbarContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>메인 | 투두</title>
      </Head>

      <AppBar position="fixed">
        <Toolbar>
          <ToolbarContent></ToolbarContent>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col justify-center gap-3">
          <div>할일을 추가해주세요.</div>
          <Button
            variant="contained"
            component={Link}
            noLinkStyle
            href="/write"
            className="py-3 "
          >
            할일추가
          </Button>
        </div>
      </div>
    </>
  );
}
