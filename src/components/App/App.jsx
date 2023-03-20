import { TweetsList } from 'components/TweetsList/TweetsList';
import css from './App.module.css';
import tweets from '../../db/tweets.json';

export const App = () => {
  return (
    <section className={css.section}>
      <TweetsList tweets={tweets} />
    </section>
  );
};
