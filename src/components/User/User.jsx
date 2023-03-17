import css from './User.module.css';

export const User = () => {
  return (
    <div className={css.avatarBox}>
      <img
        className={css.avatar}
        src={require('../../images/avatar.png')}
        alt="User avatar"
      />
    </div>
  );
};
