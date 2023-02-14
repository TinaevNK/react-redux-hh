import s from "./header.module.css";

const Header: React.FC = () => {
  return <header className={s.wrapper}>
    <h1 className={s.title}>GitHub reviewers</h1>
  </header>;
};

export default Header;
