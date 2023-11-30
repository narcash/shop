import React, { useEffect } from "react";
import { getAllProductsThunk, getAllCategoryThunk } from "../Data/productThunk";
import { useDispatch } from "react-redux";
import Main from "./pages/Main";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk(9));
    dispatch(getAllCategoryThunk());
  }, []);
  return (
    <div className="AppPage">
      <div className="AppPage_wrapper">
        <Main />
      </div>
    </div>
  );
};

export default App;
