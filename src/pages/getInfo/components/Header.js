import { ReactComponent as EllipseIcon } from "../../../assets/icons/Ellipse.svg";
import { ReactComponent as Icon2 } from "../../../assets/icons/33333.svg";
import { ReactComponent as Logo } from "../../../assets/icons/hoopa-logo.svg";
import { ReactComponent as Ellipse112 } from "../../../assets/icons/Ellipse112.svg";
import { ReactComponent as Rectangle141 } from "../../../assets/icons/rectangle141.svg";

const Header = () => (
  <div>
    <div className="bg-primary h-64 relative ">
      <Logo className="absolute left-5 top-5" />
      <Ellipse112 className="absolute left-0" />
      <Rectangle141 className="absolute right-0" />
      <EllipseIcon className="absolute  w-full bottom-[-1px] right-0 z-10" />
      <Icon2 className="absolute right-10 bottom-9 z-20" />
    </div>
  </div>
);

export default Header;
