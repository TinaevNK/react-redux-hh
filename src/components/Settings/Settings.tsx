import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Button, Collapse, Divider, Input, Space, Tooltip } from "antd";
import {
  UserOutlined,
  InfoCircleOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const Settings: React.FC = () => {
  const [isOpen, setOpen] = useState(true);

  const { Panel } = Collapse;

  return (
    <Collapse
      defaultActiveKey={[1]}
      style={{
        border: "2px solid #000",
        width: "100%",
        maxWidth: "500px",
        backgroundColor: "#1677ff",
      }}
      onChange={() => setOpen(!isOpen)}
    >
      <Panel
        header="Настройки"
        extra={<Hamburger toggled={isOpen} toggle={setOpen} color="#fff"/>}
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
