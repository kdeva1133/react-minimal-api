import axios from "axios";

export const fetchData = async () => {
  return await axios.get("http://localhost:5079/todoitems");
};
export const InsertData = async (todoPayload) => {
  return await axios.post("http://localhost:5079/createtodoitem", todoPayload);
};
