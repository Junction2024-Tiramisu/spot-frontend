import popup from "../assets/PopUp.svg";

function PopUp({ children }) {
  return (
    <div className="relative inline-block w-[290px] backdrop-blur-sm">
      <img src={popup} alt="Popup background" className="w-full h-auto" />
      <div className="absolute top-12 left-0 w-full h-full flex items-center justify-center text-white">
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
}

export default PopUp;
