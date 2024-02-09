import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.account}
        </TableCell>
        <TableCell >{row.operation}</TableCell>
        <TableCell >{row.symbol}</TableCell>
        <TableCell className='!hidden lg:!table-cell'>{row.description}</TableCell>
        <TableCell align='right' className='!hidden lg:!table-cell'>{row.qty}</TableCell>
        <TableCell align='right' className='!hidden lg:!table-cell'>{row.filled_qty}</TableCell>
        <TableCell align='right' className='!hidden lg:!table-cell'>{row.price}</TableCell>
        <TableCell align='right'>{row.status}</TableCell>
        <TableCell align='right' className='!hidden lg:!table-cell'>{row.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export const OrderTable =  (props) =>{
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Account</TableCell>
            <TableCell >Operation</TableCell>
            <TableCell >Symbol</TableCell>
            <TableCell className='!hidden lg:!table-cell'>Description</TableCell>
            <TableCell className='!hidden lg:!table-cell'>Qty.</TableCell>
            <TableCell className='!hidden lg:!table-cell'>Filled Qty</TableCell>
            <TableCell className='!hidden lg:!table-cell'>Price</TableCell>
            <TableCell >Status</TableCell>
            <TableCell className='!hidden lg:!table-cell'>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data?.map((order) => (
            <Row key={order.account} row={order} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}