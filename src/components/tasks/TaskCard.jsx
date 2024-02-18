import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTask,updateStatus } from "../../redux/features/tasks/tasksSlice";

const TaskCard = ({task}) => {
  const dispatch = useDispatch()

  const handleDeleteTask = (id)=>{
   
    dispatch(removeTask(id))
  }

  // check current task status and update
  let updatedStatus;

  if(task?.status === "pending"){
    updatedStatus = "progress"
  } else if(task?.status === "progress"){
    updatedStatus = "completed"
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task?.priority === 'High' ? 'text-red-500' : ''
        } ${task?.priority === 'Medium' ? 'text-yellow-500' : ''} ${
          task?.priority === 'Low' ? 'text-green-500' : ''
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.deadline}</p>
        <div className="flex gap-3">
          <button onClick={()=> handleDeleteTask(task?.id)}  title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={()=> dispatch(updateStatus({id:task?.id, status: updatedStatus}))}
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
