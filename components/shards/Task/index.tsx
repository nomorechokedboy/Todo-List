import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTask, UpdateTask } from "../../../lib/api/task";
import { selectLoginUser } from "../../../redux/loginUser/action";
import { deleteTodos, updateTodos } from "../../../redux/todos/action";
import FormButton from "../FormButton";
import Icon from "../Icon";
import IconWrapper from "../IconWrapper";
import { TaskData } from "../TaskForm";
import styles from "./styles.module.scss";

interface TaskProps {
  task: TaskData;
}

interface UpdateTask {
  updateTitle: string;
  updateContent: string;
  updateDateFinished: string;
}

export default function Task({ task }: TaskProps) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isUpdate, setIsUpdate] = React.useState(false);
  const loginUser = useSelector(selectLoginUser);
  const { reset, register, handleSubmit, formState } = useForm();

  const onSubmit = handleSubmit(async (data: UpdateTask) => {
    const updateTask: TaskData = {
      title: data.updateTitle,
      content: data.updateContent,
      dateFinished: data.updateDateFinished,
      _id: task._id,
      createAt: task.createAt,
    };

    const message = await UpdateTask(loginUser.token, updateTask);
    if (message) {
      dispatch(updateTodos(updateTask));
    }

    setIsUpdate(false);
    setIsOpen(false);
  });

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ titleUpdate: "", updateContent: "", updateDateFinished: "" });
    }
  }, [formState, reset]);

  const onUpdate = () => {
    setIsUpdate(true);
    setIsOpen(true);
  };
  const offUpdate = () => {
    setIsUpdate(false);
    setIsOpen(false);
  };

  const titleClass = React.useMemo(
    () => `${styles.title} ${isOpen ? styles.active : null}`,
    [isOpen]
  );

  const collapseClass = React.useMemo(
    () => `${styles.taskContent}
  ${isOpen ? styles.taskContentShow : null}`,
    [isOpen]
  );

  const handleClick = () => setIsOpen((prev) => (prev = !prev));

  const contentHeight = React.useMemo(
    () => (isOpen ? { height: "200px" } : { height: 0 }),
    [isOpen]
  );

  const deleteTask = async () => {
    const taskDeleted = await DeleteTask(loginUser.token, task._id);

    if (taskDeleted) {
      dispatch(deleteTodos(taskDeleted));
    }
  };

  return (
    <div className={styles.container}>
      <div className={titleClass}>
        <div className={styles.taskWrapper}>
          <div className={styles.checkbox} onClick={deleteTask}></div>
          {!isUpdate && (
            <span className={styles.todoTitle} onClick={handleClick}>
              {task.title}
            </span>
          )}
          {isUpdate && (
            <input
              defaultValue={task.title}
              {...register("updateTitle", {
                required: true,
                minLength: 3,
                maxLength: 50,
              })}
              className={styles.updateTitle}
            />
          )}
        </div>
        <div className={styles.rightside}>
          <IconWrapper>
            <div>Work</div>
            <Icon
              iconName="book-open"
              handleClick={() => console.log("Book open clicked")}
            ></Icon>
            <Icon iconName="ellipsis-h" handleClick={onUpdate}></Icon>
          </IconWrapper>
        </div>
      </div>
      <div className={collapseClass} style={contentHeight}>
        {isOpen && (
          <>
            {!isUpdate && (
              <>
                <div className={styles.content}>{task.content}</div>
                <div className={styles.taskDate}>
                  <span>Created: {task.createAt}</span>
                  <span>Finished at: {task.dateFinished}</span>
                </div>
              </>
            )}
            {isUpdate && (
              <>
                <textarea
                  defaultValue={task.content}
                  {...register("updateContent", {
                    required: true,
                    minLength: 3,
                    maxLength: 250,
                  })}
                  className={styles.updateContent}
                />
                <input
                  type="date"
                  defaultValue={task.dateFinished}
                  {...register("updateDateFinished", {
                    required: true,
                    minLength: 10,
                    maxLength: 11,
                  })}
                  className={styles.updateDateFinished}
                />
                <div className={styles.formBtnWrapper}>
                  <FormButton label="Cancel" handleClick={offUpdate} />
                  <FormButton label="Update" handleClick={onSubmit} />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
