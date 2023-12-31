import { MdClose } from "react-icons/md";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "components/api";

export const Contact = ({ contact }) => {

  const dispatch = useDispatch()

  const onDeleteButoon = () => {
    dispatch(deleteContact(contact.id))
  }
  
  return (
    <div className={css.wrapper}>
      <p className={css.textp}>{contact.name}</p>
      <p className={css.textp}>{contact.number}</p>
      <button className={css.btn} onClick={() => {onDeleteButoon()}}>
        <MdClose size={24} />
      </button>
    </div>
  );
};