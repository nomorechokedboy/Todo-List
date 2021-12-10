import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AddTask } from "../../../lib/api/task";
import { selectAuth } from "../../../redux/auth/action";
import { selectShowForm, setShowForm } from "../../../redux/showForm/action";
import { addTodos } from "../../../redux/todos/action";
import FormButton from "../FormButton";
import ValidateError from "../Validate";
import styles from "./styles.module.scss";

export interface TaskData {
  _id?: string;
  title: string;
  content: string;
  dateFinished: string;
  createAt: string;
}

export default function TaskForm() {
  const dispatch = useDispatch();
  const showForm = useSelector(selectShowForm);
  const loginUser = useSelector(selectAuth);

  const {
    reset,
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data: TaskData) => {
    const task = await AddTask(loginUser, data).catch((e) => console.error(e));

    if (task) {
      dispatch(addTodos(task));
    }

    dispatch(setShowForm(false));
  });

  const hideForm = React.useCallback(() => {
    dispatch(setShowForm(false));
  }, [dispatch]);

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ title: "", content: "", dateFinished: "" });
    }
  }, [formState, reset]);

  return (
    <>
      {showForm && (
        <div className={styles.overlay}>
          <div className={styles.container}>
            <div className={styles.exitForm} onClick={hideForm}>
              <i className="fas fa-times fa-2x"></i>
            </div>
            <div className={styles.formTitle}>This form do something!!!</div>
            <form className={styles.taskForm} onSubmit={onSubmit}>
              <label className={styles.label}>Title</label>
              <input
                type="text"
                placeholder="Today I will do something..."
                {...register("title", {
                  required: true,
                  minLength: 3,
                  maxLength: 50,
                })}
                className={styles.taskTitle}
              />
              {errors?.title?.type === "required" && (
                <ValidateError message="This field is required" />
              )}
              {errors?.title?.type === "minLength" && (
                <ValidateError message="First name cannot less than 3 characters" />
              )}
              {errors?.title?.type === "maxLength" && (
                <ValidateError message="First name cannot exceed 50 characters" />
              )}
              <label className={styles.label}>Content</label>
              <textarea
                placeholder="I will do this when..."
                {...register("content", {
                  required: true,
                  minLength: 3,
                  maxLength: 250,
                })}
                className={styles.taskContent}
              />
              {errors?.content?.type === "required" && (
                <ValidateError message="This field is required" />
              )}
              {errors?.content?.type === "minLength" && (
                <ValidateError message="First name cannot less than 3 characters" />
              )}
              {errors?.content?.type === "maxLength" && (
                <ValidateError message="First name cannot exceed 250 characters" />
              )}
              <label className={styles.label}>Date finished</label>
              <input
                type="date"
                placeholder="Date finished"
                {...register("dateFinished", {
                  required: true,
                  minLength: 10,
                  maxLength: 11,
                })}
              />
              {errors?.dateFinished?.type === "required" && (
                <ValidateError message="This field is required" />
              )}
              <FormButton label={"Add"} handleClick={onSubmit} />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
