import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTodoSearch,
  setTodoSearch,
} from "../../../../../redux/TodoSearch/action";
import styles from "./styles.module.scss";

export default function MainHeaderMiddle() {
  const todoSearch = useSelector(selectTodoSearch);
  const dispatch = useDispatch();
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setTodoSearch(e.currentTarget.value));
  };

  return (
    <section className={styles.middle}>
      <input
        className={styles.searchBar}
        placeholder="Type to search..."
        value={todoSearch}
        onChange={handleChange}
      />
      <i className="fas fa-search"></i>
    </section>
  );
}
