import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ShowTable() {
    const [data, setData] = React.useState([])


    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/getUsers");
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    React.useEffect(() => {
        fetchData();
    }, []);


    // Handle Delete API Call
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/deleteUser/${id}`);
            setData(data.filter(user => user.id !== id)); // Update UI after deletion
            fetchData();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    // Handle Update API Call (Example: Change First Name)
    const handleUpdate = async (id) => {
        const updatedName = prompt("Enter new first name:");
        if (!updatedName) return;

        try {
            const response = await axios.put(`http://localhost:3001/updateUser/${id}`, { firstname: updatedName });
            setData(data.map(user => (user.id === id ? { ...user, firstname: response.data.firstname } : user))); // Update UI
            fetchData();
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <>
            <TableContainer component={Paper} sx={{ display: "flex", justifyContent: "center" }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">First Name</StyledTableCell>
                            <StyledTableCell align="center">Last Name</StyledTableCell>
                            <StyledTableCell align="center">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell align="center">{row?.firstname}</StyledTableCell>
                                <StyledTableCell align="center">{row?.lastname}</StyledTableCell>
                                <StyledTableCell align="center" style={{ display: "flex", justifyContent: "space-around" }}>
                                    <Button variant="contained" onClick={()=>handleUpdate(row._id)} color="success">
                                        Update
                                    </Button>
                                    <Button variant="contained" color="error" onClick={()=>handleDelete(row._id)} startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}