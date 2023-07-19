import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/authComponent/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

// import { StatusFilter } from 'components/contactsComponent/StatusFilter/StatusFilter';
// import { ContactCounter } from 'components/contactsComponent/ContactCounter/ContactCounter';
// import css from './AppBar.module.css';

// export function AppBar() {
//   return (
//     <header className={css.wrapper}>
//       <section className={css.section}>
//         <h2 className={css.title}>Contacts</h2>
//         <ContactCounter />
//       </section>
//       <section className={css.section}>
//         <h2 className={css.title}>Filter contacts by status</h2>
//         <StatusFilter />
//       </section>
//     </header>
//   );
// }
