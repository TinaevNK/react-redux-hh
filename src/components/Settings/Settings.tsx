import { ChangeEvent, Dispatch, FC, useCallback, useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Button, Collapse, Input, Space, Tooltip } from "antd";
import {
  UserOutlined,
  InfoCircleOutlined,
  LinkOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import BlackList from "../BlackList/BlackList";
import { useDispatch, useSelector } from "../../utils/hooks";
import { User } from "../../type";
import { fetchContributors } from "../../store/asyncActions";

type Props = {
  initLogin: string;
  contributors: User[];
};

const Settings: FC<Props> = ({ initLogin, contributors }) => {
  const dispatch = useDispatch();
  const storeRepository = useSelector((state) => state.repository);
  const hasError = useSelector((state => state.isError));
  const isLoading = useSelector(state => state.isLoading);

  const [isOpen, setOpen] = useState<boolean>(true);
  const [login, setLogin] = useState<string>(initLogin);
  const [repository, setRepository] = useState<string>(storeRepository);

  const hasBlacklist = contributors.length > 0;

  const { Panel } = Collapse;

  const handleChange = (
    setter: Dispatch<React.SetStateAction<string>>,
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setter(e.target.value);
  };

  const handleClick = useCallback(() => {
    localStorage.setItem('inputsData', JSON.stringify({login, repository}));
    dispatch(fetchContributors(login, repository));
  }, [dispatch, login, repository]);

  useEffect(() => {
    const localStorageData = localStorage.getItem('inputsData')
    if (localStorageData !== null) {
      const {login: saveLogin, repository: saveRepo} = JSON.parse(localStorageData);
      setLogin(saveLogin);
      setRepository(saveRepo);
    }
  }, [])


  return (
    <Collapse
      bordered={false}
      defaultActiveKey={[1]}
      style={{
        boxShadow: "0 2px 0 rgb(5 145 255 / 10%)",
        width: "100%",
        backgroundColor: "#1677ff",
      }}
      onChange={() => setOpen(!isOpen)}
    >
      <Panel
        header="Настройки"
        extra={<Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />}
        showArrow={false}
        key="1"
        id="custom"
      >
        <Space size="middle" direction="vertical">
          <Input
            placeholder="Имя пользователя"
            prefix={<UserOutlined />}
            suffix={
              <Tooltip
                title="Введите имя пользователя GitHub"
                placement="right"
                color={"rgba(0,0,0,.7)"}
              >
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.4)" }} />
              </Tooltip>
            }
            value={login}
            onChange={(e) => handleChange(setLogin, e)}
          />

          <Input
            placeholder="Заголовок репозитория"
            prefix={<LinkOutlined />}
            suffix={
              <Tooltip title="Введите название репозитория" placement="right">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
            value={repository}
            onChange={(e) => handleChange(setRepository, e)}
          />

          <Button
            shape="round"
            icon={<CheckCircleOutlined />}
            onClick={handleClick}
            disabled={!(login && repository)}
            danger={hasError}
            loading={isLoading}
          >
            Проверка и сохранение данных
          </Button>
        </Space>
        {hasBlacklist && <BlackList contributors={contributors} />}
      </Panel>
    </Collapse>
  );
};

export default Settings;
