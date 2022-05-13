import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./actions/usersActions";
import UsersTable from "./components/UsersTable";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ClientDetailPage} from "./components/ClientDetailPage";
import * as React from 'react';
import ReviewPage from "./components/ReviewPage";
import SuccessSubmitPage from "./components/SuccessSubmitPage";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, []);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<UsersTable/>}/>
                    <Route path='/:id' element={<ClientDetailPage/>}/>
                    <Route path='/review' element={<ReviewPage/>}/>
                    <Route path='/successSubmit' element={<SuccessSubmitPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
