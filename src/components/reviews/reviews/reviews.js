import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


function Reviews(props) {
    const columns = [
        { id: 'avatar_url', label: `Reviewer`, minWidth: 50, align: 'center' },
        { id: 'body', label: 'Comment', minWidth: 100 },
        { id: 'path', label: 'File', minWidth: 150 },
        { id: 'pull_request_url', label: 'PR No', minWidth: 150, align: 'center' },
        { id: 'created_at', label: 'Date', minWidth: 50 },
        { id: 'commit_id', label: 'Resolved', minWidth: 50, align: 'center' }
    ]
    const { reviews, type } = props;
    const rows = reviews[type];
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    return (
        <React.Fragment>
            <TableContainer style={{ maxHeight: '740px' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows && rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map(column => {
                                        console.log(row);
                                        let isAvatarUrl = false;
                                        let value = row[column.id];
                                        if (column.id === 'avatar_url') {
                                            value = row['user'][column.id];
                                            isAvatarUrl = true;
                                        }
                                        if (column.id === 'created_at') {
                                            let date = new Date(value);
                                            value = date.toDateString();
                                        }
                                        if (column.id ==="commit_id"){
                                            value = row['commit_id'] === row['original_commit_id'] ? 'No' : 'Yes'
                                        }

                                        return (
                                            <TableCell key={column.id} style={{padding: 5, maxWidth: '50px', wordWrap: 'break-word'}} align={column.align}>
                                                {
                                                    isAvatarUrl ? <img src={value} width="30" height="30" /> :

                                                        (column.id === 'body') ? <a target="_blank" href={row.html_url}>{value}</a> :

                                                            (column.id === 'pull_request_url') ? value.slice(value.indexOf('pull/')) : value

                                                }
                                                <p style={{ fontSize: '10px' }}>{isAvatarUrl && row['user']['login']}</p>
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={rows && rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </React.Fragment>
    )
}

export default Reviews;