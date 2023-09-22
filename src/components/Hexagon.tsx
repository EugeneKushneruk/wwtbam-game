import classNames from "classnames";
import type { FC, ReactNode } from "react";

type hexagonProps = {
  children: ReactNode,
  active?: boolean,
  inactive?: boolean,
  asBtn?: boolean
  selected?: boolean
  correct?: boolean
  wrong?: boolean
};

const Hexagon: FC<hexagonProps> = (props) => {
  const {
    children,
    active,
    inactive,
    asBtn,
    selected,
    correct,
    wrong
  } = props
  const cmpClass = classNames("hexagon", {
    "hexagon--active": active,
    "hexagon--inactive": inactive,
    "hexagon--as-btn": asBtn,
    "hexagon--as-btn-selected": selected,
    "hexagon--as-btn-correct": correct,
    "hexagon--as-btn-wrong": wrong,
    })

  return (
    <span className={cmpClass}>
      <span className="hexagon__wrapper">
        <span className="hexagon__txt">{children}</span>
      </span>
    </span>
  );
};

export default Hexagon;