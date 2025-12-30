import { Task } from "./Task.tsx";
import { Users } from "./Users.tsx";
export const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Task />
      <Users />
    </div>
  );
};
