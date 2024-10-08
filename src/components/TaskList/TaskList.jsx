// import { Task } from "components/Task/Task";
// import { useSelector } from "react-redux";
// import css from "./TaskList.module.css";
// import { getFilters, getTasks } from "redux/selectors";
// import { statusFilters } from "../../redux/constants";

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {   
//    case statusFilters.active:
//      return tasks.filter(task => !task.completed);
//    case statusFilters.completed:
//      return tasks.filter(task => task.completed);
//    default:
//      return tasks;
//  }
// };
// export const TaskList = () => {
//   const tasks = useSelector(getTasks)

//   const statusFilter = useSelector(getFilters);
//   const visibleTasks = getVisibleTasks(tasks, statusFilter);
  
//   return (
//     <ul className={css.list}>
//       {visibleTasks.map(task => {
//         console.log(task)
//         return <li className={css.listItem} key={task.id}>
//           <Task task={task} />
//         </li>
//       })}
//     </ul>
//   );
// };
import { useSelector } from "react-redux";
import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
import { selectVisibleTasks } from "redux/selectors";

export const TaskList = () => {
  const visibleTasks = useSelector(selectVisibleTasks)


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
