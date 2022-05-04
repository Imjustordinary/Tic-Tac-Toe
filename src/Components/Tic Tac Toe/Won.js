import "./Won.css";
import WonContext from "./WonContext";

const Won = () => {
  return (
    <WonContext.Consumer>
      {(element) => {
        return (
          <img
            src="pic/line.png"
            className={
              !element.disable ? element.nameClass.concat(" won") : " disable"
            }
          />
        );
      }}
    </WonContext.Consumer>
  );
};

export default Won;
