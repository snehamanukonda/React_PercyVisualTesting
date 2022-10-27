import db from "../firebase.config";

import { useEffect } from "react";
export default function CheckData() {
  const fetchBlogs = async () => {
    const response = db.collection("react-http");
    const data = await response.get();
    console.log(data);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return <div>yes</div>;
}
