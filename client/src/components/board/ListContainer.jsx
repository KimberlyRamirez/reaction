import React from "react";
import ExistingLists from "./ExistingLists";
import AddList from "./AddList";

const ListContainer = ({ boardId, lists, cards, setViewModal }) => {
  return (
    <div id="list-container" className="list-container">
      <ExistingLists lists={lists} cards={cards} setViewModal={setViewModal}/>
      <AddList boardId={boardId} />
    </div>
  );
};

export default ListContainer;
