import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  const classes = clsx(isOnline ? [css.green] : [css.red]);

  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={classes}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
