import { Badge, Button } from "antd";
import { useState } from "react";
import Settings from "../Settings/Settings";
import s from "./main.module.css";
import { SearchOutlined } from "@ant-design/icons";

const Main: React.FC = () => {
  return (
    <main className={s.wrapper}>
      <div className={s.grid}>
        <Settings />

        <Badge count={1}> {/* позже сделать тут вычитание списка пользователей и чёрного списка */}
          <Button
            type="primary"
            icon={<SearchOutlined />}
            size="large"
            // disabled={!isReadyToSearch}
            // onClick={handleClick}
            // loading={isLoading}
          >
            Search
          </Button>
        </Badge>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure
          mollitia nam? Delectus nostrum voluptas dolorem perspiciatis, cumque
          sed nisi porro pariatur officiis cupiditate placeat tempore ipsa ex,
          veritatis aspernatur.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facere
          ullam sit porro eius ut praesentium voluptatibus possimus itaque illum
          asperiores quod illo laudantium, tempora voluptatem assumenda
          repudiandae! Ad, odio. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corrupti sint repellendus ratione illo cupiditate
          culpa voluptates quod aut neque voluptate labore repudiandae aperiam
          sit odit dolor, minima molestias quae? Porro!
        </div>
      </div>
    </main>
  );
};

export default Main;
