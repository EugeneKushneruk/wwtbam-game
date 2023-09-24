import classNames from "classnames";
import type { ReactNode } from "react";

type HexagonProps = {
  children: ReactNode;
  active?: boolean;
  inactive?: boolean;
  asBtn?: boolean;
  prefix?: string;
  selected?: boolean;
  correct?: boolean;
  wrong?: boolean;
};

function Hexagon(props: HexagonProps) {
  const {
    children,
    active,
    inactive,
    asBtn,
    prefix,
    selected,
    correct,
    wrong,
  } = props;
  const cmpClass = classNames("hexagon", {
    "hexagon--active": active,
    "hexagon--inactive": inactive,
    "hexagon--as-btn": asBtn,
    "hexagon--as-btn-selected anim-flash": selected && !correct && !wrong,
    "hexagon--as-btn-correct anim-pulse": correct && !wrong,
    "hexagon--as-btn-wrong": wrong,
  });
  const wrapperCls = classNames("hexagon__wrapper", {
    "anim-pulse-2 anim-pulse-2--dly-1": active,
  });

  return (
    <span className={cmpClass}>
      <span className={wrapperCls}>
        {!!prefix && <span className="hexagon__txt-prefix">{prefix}</span>}
        <span className="hexagon__txt">{children}</span>
      </span>
    </span>
  );
}

export default Hexagon;
