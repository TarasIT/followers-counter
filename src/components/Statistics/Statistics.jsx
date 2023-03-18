import { useEffect, useState } from 'react';
import css from './Statistics.module.css';
import { saveSubscribe, getSubscribe } from '../../services/localStorage';

const KEY = 'subscribe';

export const Statistics = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ebd8ff');
  const [isFollowed, setIsFollowed] = useState(() => {
    if (!getSubscribe(KEY)) return false;
    return getSubscribe(KEY).isFollowed;
  });
  const [counter, setCounter] = useState(() => {
    if (!getSubscribe(KEY)) return 100500;
    return getSubscribe(KEY).counter;
  });

  useEffect(() => {
    isFollowed ? setBackgroundColor('#5CD3A8') : setBackgroundColor('#ebd8ff');
    saveSubscribe(KEY, { isFollowed, counter });
  }, [isFollowed, counter]);

  const onBtnClick = () => {
    setIsFollowed(!isFollowed);
    isFollowed ? setCounter(counter - 1) : setCounter(counter + 1);
  };

  return (
    <div className={css.statisticsBox}>
      <p className={css.tweets}>777 TWEETS</p>
      <p className={css.followers}>
        {counter.toLocaleString('en-US')} FOLLOWERS
      </p>
      <button
        type="button"
        onClick={onBtnClick}
        style={{ backgroundColor }}
        className={css.btn}
      >
        {isFollowed ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </div>
  );
};
