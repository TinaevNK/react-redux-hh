import Settings from "../Settings/Settings";
import s from "./main.module.css";

const Main: React.FC = () => {
  return (
    <main className={s.wrapper}>
      <div className={s.grid}>
        <Settings />
        <button>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          harum, ad saepe autem explicabo mollitia dignissimos. Iusto eos
          dolores repudiandae reprehenderit voluptas tempora nisi culpa,
          explicabo, in id esse ratione?
        </button>
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
