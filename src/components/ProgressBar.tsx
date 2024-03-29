import Hexagon from "@/components/Hexagon";
import MenuButton from "@/components/MenuButton";
import { useAppSelector } from "@/redux/hooks";
import {
  selectShowMobMenu,
  selectProgress,
  selectStep,
} from "@/redux/slices/game";
import classNames from "classnames";

function ProgressBar() {
  const showMobMenu = useAppSelector(selectShowMobMenu);
  const progress = useAppSelector(selectProgress);
  const step = useAppSelector(selectStep);
  const cmpClass = classNames("progress-bar", {
    "progress-bar--show-as-menu": showMobMenu,
  });

  return (
    <aside className={cmpClass}>
      <MenuButton />
      <div className="progress-bar__list-wrapper">
        <ul className="progress-bar__list anim-slide-in-down">
          {progress.map(({ level, money }, idx) => {
            const active = idx === step;
            const inactive = idx < step;

            return (
              <li className="progress-bar__list-item" key={`${level}-${money}`}>
                <Hexagon active={active} inactive={inactive}>
                  {money}
                </Hexagon>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default ProgressBar;
