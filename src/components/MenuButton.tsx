import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleMobMenu } from "@/redux/slices/game";
import Image from "next/image";

function MenuButton() {
  const dispatcher = useAppDispatch();
  const showMobMenu = useAppSelector((state) => state.game.showMobMenu);
  const icon = showMobMenu ? "Close.svg" : "Menu.svg";
  const handler = () => dispatcher(toggleMobMenu(!showMobMenu));

  return (
    <span
      className="menu-btn"
      onClick={handler}
      onKeyDown={handler}
      role="button"
      tabIndex={0}
    >
      <Image src={icon} height={24} width={24} alt="Menu icon" />
    </span>
  );
};

export default MenuButton;
