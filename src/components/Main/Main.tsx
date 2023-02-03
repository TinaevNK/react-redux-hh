import { Avatar, Button } from "antd";
import Settings from "../Settings/Settings";
import s from "./main.module.css";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";

const Main: React.FC = () => {
  return (
    <main className={s.wrapper}>
      <div className={s.grid}>
        <Settings />

        <Button
          type="primary"
          icon={<SearchOutlined />}
          size="large"
          style={{ display: "block" }}
          // disabled={!isReadyToSearch}
          // onClick={handleClick}
          // loading={isLoading}
        >
          Найти ревьюера!
        </Button>

        <div className={s.result}>
          <p className={s.title}>Имя пользователя</p>
          <Avatar size={200} icon={<UserOutlined />} />
          <p className={s.description}>TinaevNK</p>
        </div>
        <div className={s.result}>
          <p className={s.title}>Ревьюер</p>
          <Avatar size={200} icon={<UserOutlined />} />
          <p className={s.title}>interpolscy</p>
        </div>
      </div>
    </main>
  );
};

export default Main;
