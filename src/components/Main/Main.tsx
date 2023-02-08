import { Button } from "antd";
import Settings from "../Settings/Settings";
import s from "./main.module.css";
import { SearchOutlined } from "@ant-design/icons";
import Profile from "../Profile/Profile";
import { useDispatch, useSelector } from '../../utils/hooks';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.username);

  console.log(userName);

  return (
    <main className={s.wrapper}>
      <div className={s.grid}>
        <Settings />

        <Button
          type="primary"
          icon={<SearchOutlined />}
          size="large"
          style={{ fontSize: "15px" }}
          // disabled={!isReadyToSearch}
          // onClick={handleClick}
          // loading={isLoading}
        >
          Найти ревьюера!
        </Button>

        <Profile title="Владелец" />
        <Profile title="Ревьюер" />
      </div>
    </main>
  );
};

export default Main;
