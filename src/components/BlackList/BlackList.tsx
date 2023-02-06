import { Avatar, Divider, Select, Space } from "antd";
import { dataRepo } from "../../mocks/dataRepo";
import { useMemo, useCallback } from "react";

const BlackList = () => {
  const contributorsOptions = useMemo(
    () =>
      dataRepo.map((user) => ({
        label: user.login,
        value: user.login,
      })),
    []
  );

  const handleListChange = useCallback(
    (values: string[]) => console.log(values),
    []
  );

  return (
    <>
      <Divider plain>Чёрный список проверяющих</Divider>
      <Space size="middle" direction="vertical">
        <Avatar.Group maxCount={20} size="small">
          {dataRepo.map((user) => (
            <Avatar src={user.avatar} key={user.login} />
          ))}
        </Avatar.Group>
        <Select
          style={{ width: "100%"}}
          allowClear
          mode="multiple"
          placeholder="Выбрать пользователей для чёрного списка"
          onChange={handleListChange}
          options={contributorsOptions}
          // value={[blacklist}
          maxTagCount="responsive"
        />
      </Space>
    </>
  );
};

export default BlackList;
