import { type User } from "../../backend";

type Props = {
  user: User;
};
export const UserCard = ({ user }: Props) => {
  return (
    <div className="flex flex-col w-1/3 min-w-68.75 p-2.5 m-1.5 border border-gray-500 rounded-xl">
      <div className="flex flex-nowrap w-full pb-2.5 border-b border-gray-500 mb-1.5">
        <div className="flex flex-nowrap gap-2.5 w-full [&>div>p:first-child]:font-bold [&>div>p:first-child]:mb-1.5">
          <img
            src={user.avatar}
            alt="user avatar"
            className="w-12.5 h-12.5 rounded-full"
          />
          <div>
            <p>{user.name}</p>
            <p>{user.role}</p>
          </div>
        </div>
        <div
          className={`w-2.5 h-2.5 rounded-full border border-gray-500 justify-self-end ${
            user.status === "active" ? "border-0 bg-green-600" : ""
          }`}
        />
      </div>
      <div className="flex w-full justify-between mt-1.5">
        <span>Email:</span>
        <b>{user.email}</b>
      </div>
      <div className="flex w-full justify-between mt-1.5">
        <span>Компания:</span>
        <b>{user.company}</b>
      </div>
    </div>
  );
};
