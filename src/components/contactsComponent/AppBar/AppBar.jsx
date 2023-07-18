import { StatusFilter } from 'components/contactsComponent/StatusFilter/StatusFilter';
import { ContactCounter } from 'components/contactsComponent/ContactCounter/ContactCounter';
import css from './AppBar.module.css';

export function AppBar() {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Contacts</h2>
        <ContactCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter contacts by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
}
