import React, { useEffect, useRef, useState } from 'react'
import styles from './mainsection.module.css'
import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Data from '../../Data/User'
import { calculateMean, calculateMedian, calculateMode, stringAvatar } from '../../utility/utils'
import { useUserdata } from '../../hooks/useUserdata'

const Mainsection = () => {

    const stats = useRef()

    const { currentUser } = useUserdata()
    const [show, setshow] = useState(false);

    let meanAge = 0
    let medianAge = 0
    let modeAge = 0
    let meanScore = 0
    let medianScore = 0
    let modeScore = 0

    useEffect(() => {
        if (stats?.current && show) {
            stats.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [show])


    meanAge = calculateMean(Data.users.map((user) => user.age));
    medianAge = calculateMedian(Data.users.map((user) => user.age));
    modeAge = calculateMode(Data.users.map((user) => user.age));

    meanScore = calculateMean(Data.users.map((user) => user.score));
    medianScore = calculateMedian(Data.users.map((user) => user.score));
    modeScore = calculateMode(Data.users.map((user) => user.score));


    const calculate = () => {
        setshow(!show);
        setTimeout(() => {
            console.log(meanAge, medianAge, modeAge, meanScore, medianScore, modeScore);
        }, 3000);

    }





    return (
        <div className={styles.mainsection}>
            <TableContainer sx={{ width: "80%", marginTop: '50px', marginBottom: "50px" }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead style={{ backgroundColor: "#eeeeee" }} sx={{ height: "70px", }}>
                        <TableRow>
                            <TableCell>User name</TableCell>
                            <TableCell align="right">User Id</TableCell>
                            <TableCell
                                onClick={calculate}
                                style={{
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}
                                title='calculate mean, median and mode' align="right">Age (click here)</TableCell>
                            <TableCell
                                onClick={calculate}
                                style={{
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}
                                title='calculate mean, median and mode' align="right">Score (click here)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Data.users.map((row) => (
                            <TableRow
                                style={{
                                    backgroundColor: row.id === currentUser.id ? '#ecffe0' : ''
                                }}
                                key={row.id}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    'th': {
                                        height: '70px'
                                    }
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <div style={{ display: 'flex', gap: '5px' }}>
                                        <Avatar {...stringAvatar(row?.name)} />
                                        <p>
                                            {row.name}
                                        </p>
                                    </div>
                                </TableCell>
                                <TableCell align="right">{row?.id}</TableCell>
                                <TableCell align="right">{row?.age}</TableCell>
                                <TableCell align="right">{row?.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                show &&
                <div ref={stats} id='stats'>
                    <h2>Age Statistics</h2>
                    <p>Mean Age: {meanAge}</p>
                    <p>Median Age: {medianAge}</p>
                    <p>Mode Age: {modeAge}</p>

                    <h2>Score Statistics</h2>
                    <p>Mean Score: {meanScore}</p>
                    <p>Median Score: {medianScore}</p>
                    <p>Mode Score: {modeScore}</p>
                </div>
            }
        </div>
    )
}

export default Mainsection