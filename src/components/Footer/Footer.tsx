import s from "./footer.module.css";

const Footer: React.FC = () => {
  return <footer className={s.wrapper}>
    <p className={s.copyright}>
        &copy; {new Date().getFullYear()} GitHub reviewers by TinaevNK
      </p>
  </footer>;
};

export default Footer;
