import Hexagon from "@/components/Hexagon";
import { useAppSelector } from "@/redux/hooks";
import type { FC } from "react";

const ProgressBar: FC = () => {
  const progress = useAppSelector(state => state.game.progress)
  const step = useAppSelector(state => state.game.step)

  return (
    <div className="progress-bar">
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
  );
};

export default ProgressBar;