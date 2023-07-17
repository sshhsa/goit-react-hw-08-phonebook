import { useSelector } from 'react-redux';
import { selectContactCount } from '../../redux/selectors';
import css from './ContactCounter.module.css';

export function ContactCounter() {
  const { active, marked } = useSelector(selectContactCount);

  return (
    <div>
      <p className={css.text}>
        Active: <span className={css.accent}>{active}</span>
      </p>
      <p className={css.text}>
        Marked: <span className={css.accent}>{marked}</span>
      </p>
    </div>
  );
}
