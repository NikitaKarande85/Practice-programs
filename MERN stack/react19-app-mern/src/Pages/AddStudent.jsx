import { Grid2, ListItem, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";

export default function AddStudent() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const submit = async () => {
        try {
            const response = await fetch('http://localhost:3001/insertTestData', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstname: firstName, lastname: lastName }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <>
            <Grid2 container spacing={2}>
                <Grid2 size={2}>
                    <ListItem>
                        <Typography variant="h6" component="h2">
                            First Name:
                        </Typography>
                    </ListItem>
                </Grid2>
                <Grid2 size={10}>
                    <ListItem><TextField id="standard-basic" label="First Name" variant="standard" onChange={(e) => setfirstName(e.target.value)} /></ListItem>
                </Grid2>
                <Grid2 size={2}>
                    <ListItem>
                        <Typography variant="h6" component="h2">
                            Last Name:
                        </Typography>
                    </ListItem>
                </Grid2>
                <Grid2 size={10}>
                    <ListItem>
                        <TextField id="standard-basic" label="Last Name" variant="standard" onChange={(e) => +setLastName(e.target.value)} />
                    </ListItem>
                </Grid2>

                <Button variant="contained" onClick={submit} endIcon={<SendIcon />}>
                    Send
                </Button>
            </Grid2>
        </>
    )
}