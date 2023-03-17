import { Statistics } from 'components/Statistics/Statistics';
import { User } from 'components/User/User';
import css from './App.module.css';

export const App = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <User />
        <Statistics />
      </div>
    </section>
  );
};
