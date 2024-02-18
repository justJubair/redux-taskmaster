import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({isOpen, setIsOpen}) => {

    // initialize react hook form
    const {register, handleSubmit, reset, } = useForm()

    const dispatch = useDispatch()

    const handleModalClose = ()=>{
        reset()
        setIsOpen(false)
    }

    const onSubmit=(data)=>{
        dispatch(addTask(data))
       handleModalClose()
        
    }

    return(
       <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Tasks">
           <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col gap-4">

            {/* title */}
            <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input className="w-full rounded-md" type="text" name="title" id="" {...register("title")} />
            </div>

            {/* description */}
            <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <textarea className="w-full rounded-md" name="description" id="" {...register("description")} />
            </div>

            {/* date */}
            <div className="flex flex-col gap-2">
            <label htmlFor="deadline">Deadline</label>
            <input type="date" className="w-full rounded-md" name="deadline" id="" {...register("deadline")} />
            </div>


            {/* assign to */}
            <div className="flex flex-col gap-2">
            <label htmlFor="assign to">Assign to</label>
            <select defaultValue="default" className="w-full rounded-md" name="assign to" {...register("assign to")}>
                <option value="default" disabled>Select a member</option>
                <option value="Joey Tribbiani">Joey Tribbiani</option>
                <option value="Ross Geller">Ross Geller</option>
                <option value="Rachel Green">Rachel Green</option>
            </select> 
            </div>

             {/* priority */}
             <div className="flex flex-col gap-2">
            <label htmlFor="Priority">Priority</label>
            <select defaultValue="default" className="w-full rounded-md" name="priority" {...register("priority")}>
                <option value="default" disabled>Choose a priority</option>
                <option value="High">High</option>
                <option value="Moderate">Moderate</option>
                <option value="Low">Low</option>
            </select> 
            </div>

           {/* cancel and submit button */}
           <div className="flex items-center justify-end gap-6 mt-4">

            {/* cancel button */}
           <button onClick={handleModalClose} className="border-2 border-red-600 px-3 py-2 rounded-md bg-white font-medium text-red-600 duration-200 hover:bg-red-500 hover:text-white hover:cursor-pointer" type="button">Cancel</button>

           {/* add task button */}
           <button className="border-2 border-blue-600 px-3 py-2 rounded-md bg-white font-medium text-blue-600 duration-200 hover:bg-blue-500 hover:text-white hover:cursor-pointer" type="submit">Add</button>
           </div>
           </form>
       </Modal>
    )}
export default AddTaskModal;