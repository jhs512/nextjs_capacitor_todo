import { useRecoilState } from "recoil";
import { todosAtom, todosLastIdAtom } from "../states";
import { dateObjToFormat1 } from "../utils";

export function useTodosState() {
  const [todosLastId, setTodosLastId] = useRecoilState(todosLastIdAtom);
  const [todos, setTodos] = useRecoilState(todosAtom);

  const writeTodo = (performDate, body) => {
    const id = todosLastId + 1;
    setTodosLastId(id);

    const regDate = dateObjToFormat1(new Date());
    const updateDate = regDate;

    const todo = {
      id,
      performDate,
      regDate,
      updateDate,
      body,
    };

    setTodos([...todos, todo]);
  };

  return {
    writeTodo,
    todos,
  };
}
