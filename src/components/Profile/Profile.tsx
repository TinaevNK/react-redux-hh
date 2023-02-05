import s from "./profile.module.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

type ProfileProps = {
  title: string;
  name?: string;
  avatar?: string;
}

const Profile: React.FC<ProfileProps> = ({ title, name = 'Username', avatar }) => {
  return (
    <div className={s.result}>
      <p className={s.text}>{title}</p>
      <Avatar size={130} icon={<UserOutlined />} src={!!avatar && avatar}/>
      <p className={s.text}>{name}</p>
    </div>
  );
};

export default Profile;
