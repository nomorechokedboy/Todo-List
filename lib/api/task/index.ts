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
  axios.default.get(`${API}/task`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const AddTask = async (token: string, data: TaskData) => {
  if (!token) return null;
  const decoded: Payload = jwtDecode(token);

  const {
    data: { task },
  } = await axios.default.post(
    `${API}/task`,
    {
      ...data,
      userId: decoded._id,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return task;
};

export const DeleteTask = async (token: string, taskId: string) => {
  if (!token) return null;
  const decoded: Payload = jwtDecode(token);

  const {
    data: { found },
  } = await axios.default.delete(`${API}/task/${taskId}`, {
    data: { userId: decoded._id },
    headers: { Authorization: `Bearer ${token}` },
  });

  return found;
};

export const UpdateTask = async (token: string, task: TaskData) => {
  if (!token) return null;
  const decoded: Payload = jwtDecode(token);

  const {
    data: { message },
  } = await axios.default.put(
    `${API}/task/${task._id}`,
    {
      userId: decoded._id,
      ...task,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return message;
};
