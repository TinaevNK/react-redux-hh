import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Button, Collapse, Input, Space, Tooltip } from "antd";
import {
  UserOutlined,
  InfoCircleOutlined,
  LinkOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import BlackList from "../BlackList/BlackList";

const Settings: React.FC = () => {
  const [isOpen, setOpen] = useState(true);

  const { Panel } = Collapse;

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
            // value={login}
            // onChange={handleLoginChange}
          />

          <Input
            placeholder="Заголовок репозитория"
            prefix={<LinkOutlined />}
            suffix={
              <Tooltip title="Введите название репозитория" placement="right">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
            // value={repo}
            // onChange={handleRepoChange}
          />

          <Button
            shape="round"
            icon={<CheckCircleOutlined />}
            // onClick={handleСheckClick}
            disabled={false} // позже вкинем пропс isReadyToSave для стопора
            // danger={hasError} // если будет ошибка во время запроса
            // loading={isLoading} // вкинем лоадер
          >
            Проверка и сохранение данных
          </Button>
        </Space>
        {true && <BlackList />}
      </Panel>
    </Collapse>
  );
};

export default Settings;
