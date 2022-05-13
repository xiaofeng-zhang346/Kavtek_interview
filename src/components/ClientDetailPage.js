import {updateSingleUser} from "../actions/usersActions";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Grid, Step, StepLabel, Stepper} from "@mui/material";
import './ClientDatailPage.scss'
import {useNavigate} from "react-router-dom";
import ButtonTemplate from "../helpers/ButtonTemplate";
import {steps} from "../helpers/constants";

export const ClientDetailPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let userDetail = useSelector(state => state.usersReducer.singleUser);
    const [showLocation, setShowLocation] = useState(false);

    console.log(userDetail);

    const [formData, setFormData] = useState({
        firstName: userDetail.firstName,
        lastName: userDetail.lastName,
        dob: userDetail.dob,
        email: userDetail.email,
        gender: userDetail.gender,
        address: userDetail.location.address,
        city: userDetail.location.city,
        state: userDetail.location.state,
        postalCode: userDetail.location.postalCode,
        country: userDetail.location.country,

        picture: userDetail.picture
    });
    const changeHandler = e => {
        let name = e.target.name
        let value = e.target.value
        setFormData(formData => ({...formData, [name]: value}))
    }
    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            setShowLocation(true);
            e.preventDefault();
        }
    }
    const handleUpload = e => {
        let img = e.target.files[0];
        setFormData(formData => ({...formData, picture: URL.createObjectURL(img)}))
        e.preventDefault();
    }
    const onSubmit = (e) => {
        const {
            firstName, lastName, dob, email, gender, address, city, state,
            postalCode, country, picture
        } = formData;
        dispatch(updateSingleUser(firstName, lastName, email, dob, gender,
            address, city, state, country, postalCode, picture));
        navigate('/review');
    }

    return (
        <div className='clientDetailContainer'>
            <Stepper activeStep={0} alternativeLabel
                     style={{width: '400px', margin: '20px 0'}}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className='clientDetail'>
                <h2>Client Details</h2>
                <form onSubmit={onSubmit}>
                    <Grid container spacing={4}>
                        <Grid item xs={6} className='gridItem'>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id='firstName' name='firstName'
                                   onChange={changeHandler}
                                   value={formData.firstName}
                                   required
                            />
                        </Grid>
                        <Grid item xs={6} className='gridItem'>
                            <label htmlFor="address">Address (Street Number, Street Name)</label>
                            <input type="text" id='address' name='address'
                                   onChange={changeHandler}
                                   onKeyPress={handleKeyPress}
                                   value={formData.address}
                                   required
                            />
                        </Grid>
                        <Grid item xs={6} className='gridItem'>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id='lastName' name='lastName'
                                   onChange={changeHandler}
                                   value={formData.lastName}
                                   required
                            />
                        </Grid>
                        <Grid item xs={6} className='gridItem'>
                            <label htmlFor="city">City</label>
                            <input type="text" id='city' name='city'
                                   onChange={changeHandler}
                                   value={showLocation ? formData.city : ''}
                                   disabled={!showLocation && true}
                                   required
                            />
                        </Grid>
                        <Grid item xs={6} className='gridItem'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' name='email'
                                   onChange={changeHandler}
                                   value={formData.email}
                                   required
                            />
                        </Grid>
                        <Grid item xs={6} className='gridItem'>
                            <label htmlFor="state">State</label>
                            <input type="text" id='state' name='state'
                                   onChange={changeHandler}
                                   value={showLocation ? formData.state : ''}
                                   required
                                   disabled={!showLocation && true}
                            />
                        </Grid>

                        <Grid item xs={6} className='gridItem'>
                            <label htmlFor="gender">Gender</label>
                            <div className='genderRadio'>
                                <input value="female" type='radio' name='gender' id='gender'
                                       checked={formData.gender === 'female' && 'checked'}
                                       onChange={changeHandler}/>
                                Female
                                <input value="male" type='radio' name='gender' id='gender'
                                       checked={formData.gender === 'male' && 'checked'}
                                       onChange={changeHandler}/>
                                Male
                                <input value="other" type='radio' name='gender' id='gender'
                                       checked={formData.gender === 'other' && 'checked'}
                                       onChange={changeHandler}/>
                                Other
                            </div>

                        </Grid>
                        <Grid item xs={6} className='gridItem'>
                            <label htmlFor="postalCode">Postal Code</label>
                            <input type="text" id='postalCode' name='postalCode'
                                   onChange={changeHandler}
                                   value={showLocation ? formData.postalCode : ''}
                                   disabled={!showLocation && true}
                                   required
                            />
                        </Grid>
                        <Grid item xs={6} className='gridItem'>
                            <label htmlFor="dob">Date of Birth (YYYY-MM-DD)</label>
                            <input type="date" id='dob' name='dob'
                                   onChange={changeHandler}
                                   value={formData.dob}
                                   required
                            />
                        </Grid>
                        <Grid item xs={6} className='gridItem'>
                            <label htmlFor="country">Country</label>
                            <input type="text" id='country' name='country'
                                   onChange={changeHandler}
                                   value={showLocation ? formData.country : ''}
                                   disabled={!showLocation && true}
                                   required
                            />
                        </Grid>
                        <Grid item xs={6} className='gridItem'>
                            <label htmlFor="profilePicture">Profile Picture</label>
                            <div className='fileInputContainer'>
                                <input type="file"
                                       id='profilePicture' name="profilePicture"
                                       accept=".jpg, .jpeg, .png"
                                       onChange={handleUpload}
                                />
                            </div>

                        </Grid>
                        <Grid item xs={6} className='gridItem nextBtn'>
                            <ButtonTemplate type="submit" text='Next'/>
                        </Grid>

                    </Grid>
                </form>
            </div>


        </div>
    )
}