import { ReactComponent as ArrowLeft } from "../assets/icons/Arrow-Left.svg";

const classes = {
  quarter: " border-b-[5px] border-r-[5px] w-1/2 h-1/2 bottom-0 rounded-br-2xl",
  half: " border-b-[5px] border-r-[5px] border-t-[5px] w-1/2 h-full bottom-0 rounded-br-2xl rounded-tr-2xl",
  threeQuarters:
    " border-b-[5px] border-r-[5px] border-t-[5px] w-1/2 h-full bottom-0 rounded-br-2xl rounded-tr-2xl",
  threeQuarters2:
    " border-l-[5px] border-t-[5px] w-full h-1/2 top-0 left-0 rounded-tl-2xl rounded-tr-2xl",
  full: " border-[5px] w-full h-full rounded-2xl",
};
const SubmitButton = ({ state }) => {
  return (
    <div className="h-14 relative">
      <div className="border-[5px] border-[#E0E0E0] w-full rounded-2xl	absolute h-full p-1">
        <div className="bg-[#80E8D0] h-full rounded-xl flex justify-center items-center">
          {" "}
          <ArrowLeft />
        </div>
      </div>
      <div className={"border-[#4CB59F] absolute" + classes[state]}></div>
      {state === "threeQuarters" && (
        <div
          className={"border-[#4CB59F] absolute" + classes.threeQuarters2}
        ></div>
      )}
    </div>
  );
};

export default SubmitButton;
