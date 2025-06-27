import axios from "axios";

export const fetchData = async () => {
  return await axios.get("http://4.154.193.42:8080/todoitems");
};
export const InsertData = async (todoPayload) => {
  return await axios.post(
    "http://4.154.193.42:8080/createtodoitem",
    todoPayload
  );
};
