import Hexagon from "@/components/Hexagon";
import MenuButton from "@/components/MenuButton";
import { useAppSelector } from "@/redux/hooks";
import classNames from "classnames";
import type { FC } from "react";

const ProgressBar: FC = () => {
  const showMobMenu = useAppSelector(state => state.game.showMobMenu)
  const progress = useAppSelector(state => state.game.progress)
  const step = useAppSelector(state => state.game.step)
  const cmpClass = classNames("progress-bar", {
    "progress-bar--show-as-menu": showMobMenu
  })

  return (
    <aside className={cmpClass}>
      <MenuButton />
      <div className="progress-bar__list-wrapper">
        <ul className="progress-bar__list">
          {progress.map(({ level, money }, idx) => {
            const active = idx === step;
            const inactive = idx < step;

            return (
              <li className="progress-bar__list-item" key={`${level}-${money}`}>
                <Hexagon active={active} inactive={inactive}>{money}</Hexagon>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default ProgressBar;