import { Avatar, Divider, Select, Space } from "antd";
import { useMemo, FC } from "react";
import { User } from "../../type";
import { useDispatch, useSelector } from "../../utils/hooks";
import { setBlacklist } from "../../store/actions";

type Props = {
  contributors: User[];
};

const BlackList: FC<Props> = ({ contributors }) => {
  const dispatch = useDispatch();
  const blacklist = useSelector((state) => state.blacklist);

  const contributorsOptions = useMemo(
    () =>
      contributors.map((user) => ({
        label: user.login,
        value: user.login,
      })),
    [contributors]
  );

  const handleChange = (values: string[]) => dispatch(setBlacklist(values));

  return (
    <>
      <Divider plain>Чёрный список проверяющих</Divider>
      <Space size="middle" direction="vertical">
        <Avatar.Group maxCount={20} size="small">
          {contributors.map((user) => (
            <Avatar src={user.avatar} key={user.login} />
          ))}
        </Avatar.Group>
        <Select
          style={{ width: "100%" }}
          allowClear
          mode="multiple"
          placeholder="Выбрать пользователей для чёрного списка"
          onChange={handleChange}
          options={contributorsOptions}
          value={blacklist}
          maxTagCount="responsive"
        />
      </Space>
    </>
  );
};

export default BlackList;
