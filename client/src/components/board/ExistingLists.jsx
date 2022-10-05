import React from "react";
import ListWrapper from "../list/ListWrapper";

const ExistingLists = ({ lists, cards, setViewModal }) => {
  return (
    <div id="existing-lists" className="existing-lists">
      {lists.map((list) => (
        <ListWrapper key={list._id} {...list} cards={cards} setViewModal={setViewModal} />
      ))}
    </div>
  );
};

export default ExistingLists;
