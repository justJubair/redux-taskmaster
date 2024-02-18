import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen, setIsOpen}) => {
    return(
       <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Tasks">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit cum tempora porro, magnam nobis exercitationem eum! Mollitia maiores ratione similique ducimus minima, veritatis libero saepe impedit. Magni quas quisquam deserunt.</p>
       </Modal>
    )}
export default AddTaskModal;