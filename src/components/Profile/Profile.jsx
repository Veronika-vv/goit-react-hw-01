import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profileWrap}>
      <div>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileUs}>{tag}</p>
        <p className={css.profileUs}>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
