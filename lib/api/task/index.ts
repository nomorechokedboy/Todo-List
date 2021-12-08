import * as axios from "axios";
import jwtDecode from "jwt-decode";
import { TaskData } from "../../../components/shards/TaskForm";
import { API } from "../../../config";

interface Payload {
  _id: string;
  fullname: string;
  email: string;
}

export const GetAllTask = (token: string) =>
  axios.default.get(API + "/task", { headers: { Authorization: token } });

export const AddTask = (token: string, data: TaskData) => {
  if (!token) return false;
  const decoded: Payload = jwtDecode(token);

  axios.default.post(
    API + "/task",
    {
      ...data,
      userId: decoded._id,
    },
    {
      headers: { Authorization: token },
    }
  );

  return true;
};

export const DeleteTask = (token: string, taskId: string) => {
  if (!token) return false;
  const decoded: Payload = jwtDecode(token);

  axios.default.delete(`${API}/task/${taskId}`, {
    data: { userId: decoded._id },
    headers: { Authorization: token },
  });
  return true;
};

export const UpdateTask = (token: string, task: TaskData) => {
  if (!token) return false;
  const decoded: Payload = jwtDecode(token);

  if (task._id) {
    axios.default.put(
      `${API}/task/${task._id}`,
      {
        userId: decoded._id,
        ...task,
      },
      { headers: { Authorization: token } }
    );

    return true;
  }

  return false;
};
