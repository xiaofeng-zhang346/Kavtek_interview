import {useSelector} from "react-redux";
import {useState} from "react";
import ConfirmModal from "./ConfirmModal";
import {useNavigate} from "react-router-dom";
import './ReviewPage.scss'
import ButtonTemplate from "../helpers/ButtonTemplate";
import {Step, StepLabel, Stepper} from "@mui/material";
import {dateConverter, steps} from "../helpers/constants";


const ReviewPage = () => {
    const navigate = useNavigate();
    const [confirmOpen, setConfirmOpen] = useState(false);
    const handleClickOpen = () => {
        setConfirmOpen(true);
    }
    const handleClose = () => {
        setConfirmOpen(false);
    }

    let singleUser = useSelector(state => state.usersReducer.singleUser);
    const {
        id,
        firstName,
        lastName,
        email,
        dob,
        gender,
        picture,
        location: {address, city, state, country, postalCode}
    } = singleUser;
    return (

        <div className='reviewPageContainer'>
            <Stepper activeStep={1} alternativeLabel style={{width: '400px', margin:'20px 0'}}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <h1>
                Review
            </h1>
            <div className='reviewContainer'>
                <div className='reviewTextContainer'>
                    <p>
                        {firstName} {lastName} from {country}
                    </p>
                    <h2>Details</h2>
                    <p>Gender: {gender}</p>
                    <p>
                        Full Address: {address}, {city}, {state}, {country}, {postalCode}
                    </p>
                    <p>Date of birth: {dateConverter(dob)}</p >
                    <p>Email Address: {email}</p>
                </div>
                <div className='reviewPicContainer'>
                    <img src={picture} alt="profile picture"/>
                </div>
            </div>


            <ButtonTemplate text='Submit' fn={handleClickOpen}/>
            <button onClick={() => navigate(`/client${id}`)} style={{width:'200px', height:'45px', margin:'5px 0'}}>Go Back</button>
            {confirmOpen &&
                <div className='confirmModalContainer'>
                    <ConfirmModal onClose={handleClose} />
                </div>
            }

        </div>)
}
export default ReviewPage;