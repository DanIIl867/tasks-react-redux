import { useSelector } from "react-redux";
import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
import { getFilters, getTasks } from "redux/selectors";

const getVisibleTasks = (tasks, statusFilter) => {
  
}

export const TaskList = () => {

  const tasks = useSelector(getTasks)
  const statusFilter = useSelector(getFilters);
  const visibleTasks = getVisibleTasks(tasks, statusFilter)

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
