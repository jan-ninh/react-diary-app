import React from "react";

const clearLocalStorage = (setAllLogs) => {
  setAllLogs([]);
  localStorage.removeItem("diaryLogs");
};

export default clearLocalStorage;
