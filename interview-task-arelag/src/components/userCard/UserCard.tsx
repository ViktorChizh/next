import { type User } from "../../backend";
import "./usersCard.css";

type Props = {
  user: User;
};
export const UserCard = ({ user }: Props) => {
  return (
    <div className="card">
      <div className="userInfo">
        <div className="nameBlock">
          <img src={user.avatar} alt="user avatar" className="ava" />
          <div>
            <p>{user.name}</p>
            <p>{user.role}</p>
          </div>
        </div>
        <div
          className={`userStatus ${user.status === "active" ? "active" : ""}`}
        />
      </div>
      <div className="infoBlock">
        <span>Email:</span>
        <b>{user.email}</b>
      </div>
      <div className="infoBlock">
        <span>Компания:</span>
        <b>{user.company}</b>
      </div>
    </div>
  );
};
