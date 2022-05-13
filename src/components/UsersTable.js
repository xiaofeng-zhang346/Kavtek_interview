import {useDispatch, useSelector} from "react-redux";
import './UsersTable.scss'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Tooltip
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {detectStep, selectSingleUser} from "../actions/usersActions";
import {useEffect, useState} from "react";
import {dateConverter} from "../helpers/constants";

const UsersTable = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userList = useSelector(state => state?.usersReducer?.usersList);

    //pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <TableContainer className='usersTableContainer'>
            <h1>Users</h1>
            <Table sx={{minWidth: 500}} aria-label="customized table" className='tableContainer'>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">DOB</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Gender</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userList.length > 0 && userList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((user) => (
                            <TableRow key={user.id}>
                                <TableCell component="th" scope="row"
                                           style={{cursor: 'pointer', color: 'skyblue', fontWeight: '600'}}
                                           onClick={() => {
                                               navigate(`/client${user.id}`)
                                               dispatch(selectSingleUser(user.id))
                                           }}
                                >
                                    {user.firstName} {user.lastName}
                                </TableCell>
                                <TableCell align="left">{dateConverter(user.dob)}</TableCell>
                                <Tooltip title={user.email}>
                                    <TableCell align="left"  style={{
                                        cursor: 'pointer'
                                    }}>
                                        <div style={{
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            width:'150px'
                                        }}>{user.email}</div>
                                    </TableCell>
                                </Tooltip>
                                <TableCell align="left">{user.gender}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            <TablePagination
                className='paginationContainer'
                rowsPerPageOptions={[4]}
                component="div"
                count={userList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    )
}
export default UsersTable;