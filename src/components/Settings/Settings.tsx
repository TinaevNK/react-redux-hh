import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Button, Collapse, Divider, Input, Space, Tooltip } from "antd";
import {
  UserOutlined,
  InfoCircleOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const Settings: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const { Panel } = Collapse;

  return (
    <Collapse
      style={{
        border: "2px solid #000",
        width: "100%",
        maxWidth: "500px",
        backgroundColor: "rgba(0, 0, 0, 0.185)",
      }}
      onChange={() => setOpen(!isOpen)}
    >
      <Panel
        header="Settings"
        extra={<Hamburger toggled={isOpen} toggle={setOpen} />}
        showArrow={false}
        key="1"
        id="custom"
      >
        <Space size="middle" direction="vertical">
          <Input
            placeholder="Username"
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
            placeholder="Repository title"
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
            shape='round'
            size='large'
            // onClick={handleСheckClick}
            disabled={false} // позже вкинем пропс isReadyToSave для стопора
            // danger={hasError} // если будет ошибка во время запроса
            // loading={isLoading} // вкинем лоадер
          >
            Проверка и сохранение данных
          </Button>
        </Space>
        <Divider plain>Чёрный список проверяющих</Divider>

        <p>cddccdc</p>
      </Panel>
    </Collapse>
  );
};

export default Settings;
