import { Task } from "./Task.tsx";
import { Users } from "./components/Users/Users.tsx";
export const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Task />
      <Users />
    </div>
  );
};
