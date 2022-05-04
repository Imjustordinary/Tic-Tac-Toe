import React, { useCallback, useState } from "react";
import "./Display.css";

import Element from "./Element";
import ShowTurn from "./ShowTurn";
import WonContext from "./WonContext";
import ShowTurnPhone from "./ShowTurnPhone";
import MessageBox from "./MessageBox";

const Display = () => {
  const [turn, setTurn] = useState(true);
  const [disable, setDisable] = useState(true);
  const [wonStage, setWonStage] = useState('');
  const [dropMessage, setDropMessage] = useState(false)
  const [draw, setDraw] = useState(false)


  const [elements, setElements] = useState([
    { id: 1, element: null, action: "" },
    { id: 2, element: null, action: "" },
    { id: 3, element: null, action: "" },
    { id: 4, element: null, action: "" },
    { id: 5, element: null, action: "" },
    { id: 6, element: null, action: "" },
    { id: 7, element: null, action: "" },
    { id: 8, element: null, action: "" },
    { id: 9, element: null, action: "" },
  ]);

  const clearHandler =useCallback(()=>{
    setElements([{ id: 1, element: null, action: "" },
    { id: 2, element: null, action: "" },
    { id: 3, element: null, action: "" },
    { id: 4, element: null, action: "" },
    { id: 5, element: null, action: "" },
    { id: 6, element: null, action: "" },
    { id: 7, element: null, action: "" },
    { id: 8, element: null, action: "" },
    { id: 9, element: null, action: "" }])
    setTurn(true)
    setDisable(true)
    setDropMessage(false)
    setDraw(false)
  },[])


  const chooseHandler = (value) => {
    let newElements = [...elements];
    if (turn === true) {
      newElements[value - 1].element = "pic/circle.png";
      newElements[value - 1].action = "disable";
    } else {
      newElements[value - 1].element = "pic/cross.png";
      newElements[value - 1].action = "disable";
    }

    if (
      (elements[0].element === "pic/circle.png" &&
      elements[3].element === "pic/circle.png" &&
      elements[6].element === "pic/circle.png" )
     ||
      (elements[0].element === "pic/cross.png" &&
        elements[3].element === "pic/cross.png" &&
        elements[6].element === "pic/cross.png")
    ) {
      setDisable(false);
      setWonStage("fir-col");
      setDropMessage(true)
      return
    }
    else if (
      (elements[4].element === "pic/circle.png" &&
      elements[1].element === "pic/circle.png" &&
      elements[7].element === "pic/circle.png" )
     ||
      (elements[1].element === "pic/cross.png" &&
        elements[4].element === "pic/cross.png" &&
        elements[7].element === "pic/cross.png")
    ) {
      setDisable(false);
      setWonStage("sec-col");
      setDropMessage(true)
      return
    }
    else if (
      (elements[2].element === "pic/circle.png" &&
      elements[5].element === "pic/circle.png" &&
      elements[8].element === "pic/circle.png" )
     ||
      (elements[2].element === "pic/cross.png" &&
        elements[5].element === "pic/cross.png" &&
        elements[8].element === "pic/cross.png")
    ) {
      setDisable(false);
      setWonStage("third-col");
      setDropMessage(true)
      return
    } 
    else if (
      (elements[0].element === "pic/circle.png" &&
      elements[1].element === "pic/circle.png" &&
      elements[2].element === "pic/circle.png" )
     ||
      (elements[0].element === "pic/cross.png" &&
        elements[1].element === "pic/cross.png" &&
        elements[2].element === "pic/cross.png")
    ) {
      setDisable(false);
      setWonStage("fir-row");
      setDropMessage(true)
      return
    }else if (
      (elements[4].element === "pic/circle.png" &&
      elements[5].element === "pic/circle.png" &&
      elements[3].element === "pic/circle.png" )
     ||
      (elements[4].element === "pic/cross.png" &&
        elements[5].element === "pic/cross.png" &&
        elements[3].element === "pic/cross.png")
    ) {
      setDisable(false);
      setDropMessage(true)
      setWonStage('sec-row')
      return
    }
    else if (
      (elements[6].element === "pic/circle.png" &&
      elements[7].element === "pic/circle.png" &&
      elements[8].element === "pic/circle.png" )
     ||
      (elements[6].element === "pic/cross.png" &&
        elements[7].element === "pic/cross.png" &&
        elements[8].element === "pic/cross.png")
    ) {
      setDisable(false);
      setWonStage("third-row");
      setDropMessage(true)
      return
    }else if (
      (elements[0].element === "pic/circle.png" &&
      elements[4].element === "pic/circle.png" &&
      elements[8].element === "pic/circle.png" )
     ||
      (elements[0].element === "pic/cross.png" &&
        elements[4].element === "pic/cross.png" &&
        elements[8].element === "pic/cross.png")
    ) {
      setDisable(false);
      setWonStage("left-right");
      setDropMessage(true)
      return
    }
    else if (
      (elements[2].element === "pic/circle.png" &&
      elements[4].element === "pic/circle.png" &&
      elements[6].element === "pic/circle.png" )
     ||
      (elements[2].element === "pic/cross.png" &&
        elements[4].element === "pic/cross.png" &&
        elements[6].element === "pic/cross.png")
    ) {
      setDisable(false);
      setWonStage("right-left");
      setDropMessage(true)
      return
    }else if (newElements.filter((each) => each.element === null).length === 0)
    {
 setDraw(true)
console.log('full')
 setDropMessage(true)
} 

    setTurn((turn) => !turn);
    setElements(newElements);
  };

  return (
    <WonContext.Provider value={{disable:disable, nameClass:wonStage}}>
    <div className="holder">
        <ShowTurnPhone turn={turn} />
      <div className="ticTable">
        {elements.map((each) => (
          <Element
            key={each.id}
            id={each.id}
            element={each.element}
            chooseHandler={chooseHandler}
            action={each.action}
           
          />
        ))}
      </div>
      
      <ShowTurn turn={turn} />
      <MessageBox draw={draw} dropMessage={dropMessage} turn={turn} clearHandler={clearHandler}/>
    </div>
    </WonContext.Provider>
  );
};

export default Display;
