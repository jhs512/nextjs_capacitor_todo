import { AppBar, Button, Toolbar, Chip, IconButton } from "@mui/material";
import Head from "next/head";
import ToolbarContent from "../components/ToolbarContent";
import { useTodosState } from "../hooks";
import Link from "../src/Link";

export default function Home() {
  const { todos, setCompleted } = useTodosState();

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
        <div className="flex-1 bg-[#F0F0F0] pt-5">
          <div>
            <ul>
              {todos.map((todo) => (
                <li key={todo.id} className="mx-5 py-4">
                  <div className="flex">
                    <Chip
                      color="primary"
                      label={`기한 : ${todo.performDate}`}
                      className="pt-1 rounded-[12px] text-[12px] border-[1.5px]"
                      variant="outlined"
                    />
                  </div>
                  <div className="flex items-start gap-5 bg-white rounded-[20px] shadow mt-3 py-4">
                    <div
                      className="pl-6 min-h-[60px] flex items-center"
                      onClick={() => setCompleted(todo.id, !todo.completed)}
                    >
                      <IconButton variant="text" color="inherit">
                        <span
                          className={
                            "text-[#dcdcdc] text-4xl" +
                            (todo.completed ? " text-[#ff8686]" : "")
                          }
                        >
                          <i className="fa-solid fa-check"></i>
                        </span>
                      </IconButton>
                    </div>
                    <div className="w-[3px] rounded-[1px] self-stretch bg-[#dcdcdc]"></div>
                    <div className="flex flex-col justify-center flex-1">
                      <div className="text-[13px] text-[#565656]">
                        {todo.body}
                      </div>
                    </div>
                    <div className="flex min-h-[60px] flex items-center pr-6">
                      <IconButton
                        variant="text"
                        color="inherit"
                        noLinkStyle
                        size="small"
                        className="text-[#dcdcdc]"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </IconButton>
                    </div>
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
