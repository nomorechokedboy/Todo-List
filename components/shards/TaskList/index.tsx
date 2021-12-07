import React from "react";
import styles from "./taskList.module.css";
import Task from "../Task";
import TaskListTitle from "../TaskListTitle";
import IconicButton from "../IconicButton";
import { useDispatch, useSelector } from "react-redux";
import { setShowForm } from "../../../redux/showForm/action";
import { selectTodos } from "../../../redux/todos/action";
import { TaskData } from "../TaskForm";

export default function TaskList() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const showForm = React.useCallback(() => {
    dispatch(setShowForm(true));
  }, []);
  const buttonColor = React.useMemo(() => ({ color: "#666" }), []);
  const iconColor = React.useMemo(() => ({ color: "red" }), []);

  return (
    <div className={styles.container}>
      <TaskListTitle />
      <div className={styles.tasks}>
        {todos.map((todo: TaskData, i: number) => (
          <Task title={todo.title} key={i} />
        ))}
        <div className={styles.addButton}>
          <IconicButton
            buttonName="Add task"
            buttonStyle={buttonColor}
            iconName="plus"
            iconStyle={iconColor}
            handleClick={showForm}
          />
        </div>
      </div>
    </div>
  );
}
