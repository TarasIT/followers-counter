import { useEffect, useState } from 'react';
import css from './Statistics.module.css';

export const Statistics = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ebd8ff');
  const [isFollowed, setIsFollowed] = useState(false);
  const [counter, setCounter] = useState(100500);

  useEffect(() => {
    isFollowed ? setBackgroundColor('#5CD3A8') : setBackgroundColor('#ebd8ff');
  }, [isFollowed]);

  const transformCounter = () => counter.toLocaleString('en-US');

  const onBtnClick = () => {
    setIsFollowed(!isFollowed);
    isFollowed ? setCounter(counter - 1) : setCounter(counter + 1);
  };

  return (
    <div className={css.statisticsBox}>
      <p className={css.tweets}>777 TWEETS</p>
      <p className={css.followers}>{transformCounter()} FOLLOWERS</p>
      <button
        onClick={onBtnClick}
        style={{ backgroundColor }}
        className={css.btn}
      >
        {isFollowed ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </div>
  );
};
