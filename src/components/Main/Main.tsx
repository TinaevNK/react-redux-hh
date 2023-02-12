import { FC, useMemo } from "react";
import s from "./main.module.css";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Settings from "../Settings/Settings";
import Profile from "../Profile/Profile";
import { useDispatch, useSelector } from "../../utils/hooks";
import { User } from "../../type";
import { setReview } from "../../store/actions";
import { DEFAULT_LOGIN } from "../../utils/constants";

const Main: FC = () => {
  const dispatch = useDispatch();

  const owner = useSelector((state) => state.owner);
  const reviewer = useSelector((state) => state.review);
  const contributors = useSelector((state) => state.contributors);
  const blacklist = useSelector((state) => state.blacklist);

  const defaultLogin = owner.login === DEFAULT_LOGIN ? "" : DEFAULT_LOGIN;
  const isReadyToSearch = contributors.length !== blacklist.length;

  const whitelist = useMemo(() => {
    const set = new Set(blacklist);
    return contributors.filter((reviewer) => !set.has(reviewer.login));
  }, [blacklist, contributors]);

  const getReviewer = (): User => {
    const i = Math.floor(Math.random() * whitelist.length);
    return whitelist[i];
  };

  const handleClick = () => {
    dispatch(setReview(getReviewer()));
  };

  return (
    <main className={s.wrapper}>
      <div className={s.grid}>
        <Settings initLogin={defaultLogin} contributors={contributors} />

        <Button
          type="primary"
          icon={<SearchOutlined />}
          size="large"
          style={{ fontSize: "15px" }}
          disabled={!isReadyToSearch}
          onClick={handleClick}
        >
          {isReadyToSearch ? "Найти ревьюера!" : "Нет ревьюеров"}
        </Button>

        <Profile title="Владелец" name={owner.login} avatar={owner.avatar} />
        <Profile title="Ревьюер" name={reviewer.login} avatar={reviewer.avatar} />
      </div>
    </main>
  );
};

export default Main;
