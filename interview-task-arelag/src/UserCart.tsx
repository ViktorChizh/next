import { type User } from "./backend";

type Props = {
  user: User;
};
export const UserCart = ({ user }: Props) => {
  return (
    <div>
      <div>
        <img src={user.avatar} alt="user avatar" />
        <div className={user.status ? "active" : ""}></div>
        <div>
          <p>{user.name}</p>
          <p>{user.role}</p>
        </div>
        <div>
          <p>Email: {user.email}</p>
          <p>Email: {user.company}</p>
        </div>
      </div>
    </div>
  );
};
