import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './TweetsList.module.css';
import { saveSubscribe, getSubscribe } from '../../services/localStorage';

const KEY = 'usersTweets';

export const TweetsList = ({ tweets }) => {
  const [tweetsInfo, setTweetsInfo] = useState(() => {
    if (!getSubscribe(KEY))
      return tweets.map(tweet => {
        tweet.isFollowed = false;
        return tweet;
      });
    return getSubscribe(KEY);
  });
  const bgColorActive = '#5CD3A8';

  useEffect(() => {
    saveSubscribe(KEY, tweetsInfo);
  }, [tweetsInfo]);

  const onBtnClick = id => {
    setTweetsInfo(
      tweetsInfo.map(tweet => {
        if (id === tweet.id) {
          tweet.isFollowed = !tweet.isFollowed;
          tweet.followers = tweet.isFollowed
            ? tweet.followers + 1
            : tweet.followers - 1;
        }
        return tweet;
      })
    );
  };

  return (
    <ul className={css.tweetsList}>
      {tweetsInfo.map(({ id, tweets, isFollowed, followers, avatar }) => {
        return (
          <li key={id} className={css.tweet}>
            <div className={css.avatarBox}>
              <img
                className={css.avatar}
                src={require(`../../images/${avatar}`)}
                alt="User avatar"
              />
            </div>
            <div key={id} className={css.statisticsBox}>
              <p className={css.tweets}>{tweets} TWEETS</p>
              <p className={css.followers}>
                {followers.toLocaleString('en-US')} FOLLOWERS
              </p>
              <button
                type="button"
                onClick={() => onBtnClick(id)}
                style={{ backgroundColor: isFollowed && bgColorActive }}
                className={css.btn}
              >
                {isFollowed ? 'FOLLOWING' : 'FOLLOW'}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

TweetsList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
