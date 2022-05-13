import TextTemplate from "../helpers/TextTemplate";
import {useNavigate} from "react-router-dom";
import ButtonTemplate from "../helpers/ButtonTemplate";
import './ConfirmModel.scss'
const ConfirmModal = ({onClose}) => {
    const navigate = useNavigate();
    const handleYes = () => {
        navigate(`/successSubmit`);
        onClose();
    }
    return (
        <div>
            <div className='textContainer'>
                <TextTemplate text='Are you sure you want to submit?'/>
            </div>
            <div className='conformModalBtn'>
            <button className='closeBtn' onClick={onClose}>Dismiss</button>
                <ButtonTemplate fn={handleYes} text='Yes'/>
            </div>

        </div>
    )
}
export default ConfirmModal;
