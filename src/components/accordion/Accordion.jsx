import { useState } from "react";
import Footer from "../footer/Footer";
import data from "./data";
import "./Accordion.css";

export default function Accordion() {
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [selected, setSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);

  const handleSingleSelection = (Id) => {
    if (Id === selected) {
      setSelected(null);
    } else {
      setSelected(Id);
    }
  };

  const handleMultiSelection = (id) => {
    const multiSelectedCP = [...multiSelected];
    const findIndex = multiSelectedCP.indexOf(id);
    if (findIndex === -1) {
      multiSelectedCP.push(id);
    } else {
      multiSelectedCP.splice(findIndex, 1);
    }
    setMultiSelected(multiSelectedCP);
  };

  return (
    <>
      <div className="wrapper">
        <button
          className="multi-selection-button"
          onClick={() => {
            setEnableMultiSelection(!enableMultiSelection);
            setSelected(null);
            setMultiSelected([]);
          }}
        >
          {enableMultiSelection ? "Disable" : "Enable"} Multi Selection
        </button>
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div
                className="item"
                key={dataItem.id}
                onClick={() => {
                  enableMultiSelection
                    ? handleMultiSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id);
                }}
              >
                <h3>{dataItem.title}</h3>
                {dataItem.id === selected ||
                  multiSelected.indexOf(dataItem.id) > -1 || <span>+</span>}

                {(dataItem.id === selected ||
                  multiSelected.indexOf(dataItem.id) > -1) && (
                  <p className="content">{dataItem.info}</p>
                )}
              </div>
            );
          })
        ) : (
          <div>No data found</div>
        )}
      </div>
      <Footer />
    </>
  );
}
