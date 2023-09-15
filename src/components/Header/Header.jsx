import s from './Header.module.css';

const Header = ({ dark, setDark }) => {
  return (
    <>
      <header className={dark ? `${s.header} ${s.dark}` : s.header}>
        <button onClick={() => setDark(!dark)} className={s.btn}>
          topic switching
        </button>
      </header>
    </>
  );
};

export default Header;
