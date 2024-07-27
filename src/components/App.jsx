import { Layout } from "components/Layout/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import {getTasks} from "redux/operations";
import {useEffect} from "react";

export const App = () => {

  const dispatch = useDispatch

  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};