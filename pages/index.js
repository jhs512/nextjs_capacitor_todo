import { AppBar, Button, Toolbar, Chip } from "@mui/material";
import Head from "next/head";
import ToolbarContent from "../components/ToolbarContent";
import { useTodosState } from "../hooks";
import Link from "../src/Link";

export default function Home() {
  const { todos } = useTodosState();

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

      {todos.length == 0 && (
        <div className="flex-1 flex justify-center items-center bg-[#F0F0F0]">
          <div className="flex flex-col justify-center gap-3">
            <div>할일을 추가해주세요.</div>
            <Button
              variant="contained"
              component={Link}
              noLinkStyle
              href="/write"
              className="py-3 rounded-[30px]"
            >
              할일추가
            </Button>
          </div>
        </div>
      )}

      {todos.length > 0 && (
        <div className="flex-1 bg-[#F0F0F0]">
          <div>
            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="bg-white m-5 p-5 rounded-[20px] flex shadow gap-4"
                >
                  <div className="p-3">
                    <span className="text-[#dcdcdc] text-4xl">
                      <i className="fa-solid fa-check"></i>
                    </span>
                  </div>
                  <div className="w-[3px] bg-[#dcdcdc]"></div>
                  <div className="p-3">
                    <Chip
                      size="small"
                      label={todo.id}
                      color="default"
                      variant="outlined"
                      className="pt-1"
                    />
                    <div className="mt-2">{todo.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
