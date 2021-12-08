import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllTask } from "../../../lib/api/task";
import { selectLoginUser } from "../../../redux/loginUser/action";
import { setShowForm } from "../../../redux/showForm/action";
import { selectTodos, setTodos } from "../../../redux/todos/action";
import IconicButton from "../IconicButton";
import Task from "../Task";
import { TaskData } from "../TaskForm";
import TaskListTitle from "../TaskListTitle";
import styles from "./taskList.module.css";

export default function TaskList() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const loginUser = useSelector(selectLoginUser);

  const showForm = React.useCallback(() => {
    dispatch(setShowForm(true));
  }, [dispatch]);
  const buttonColor = React.useMemo(() => ({ color: "#666" }), []);
  const iconColor = React.useMemo(() => ({ color: "red" }), []);

  const Tasks = React.useMemo(
    () => todos.map((todo: TaskData) => <Task key={todo._id} task={todo} />),
    [todos]
  );

  React.useEffect(() => {
    GetAllTask(loginUser)
      .then(({ data }) => {
        const tasks = data.map((task: TaskData) => ({
          _id: task._id,
          title: task.title,
          content: task.content,
          dateFinished: new Date(task.dateFinished).toLocaleDateString(),
          createAt: new Date(task.createAt).toLocaleDateString(),
        }));

        dispatch(setTodos(tasks));
      })
      .catch((e) => console.error(e));
  }, [loginUser, dispatch, showForm]);

  return (
    <div className={styles.container}>
      <TaskListTitle />
      <div className={styles.tasks}>
        {Tasks}
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
