import React, { useState } from "react";
import { Collapse, IconButton, TableCell, TableRow, Typography } from "@mui/material";
import Box from '@mui/material/Box';

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function OrderRow(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
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
        <TableCell align="center">{row.operation}</TableCell>
        <TableCell align="center">{row.symbol}</TableCell>
        <TableCell className="!hidden lg:!table-cell">
          {row.description}
        </TableCell>
        <TableCell className="!hidden lg:!table-cell">{row.qty}</TableCell>
        <TableCell align="center" className="!hidden lg:!table-cell">
          {row.filled_qty}
        </TableCell>
        <TableCell align="right" className="!hidden lg:!table-cell">
          {row.price}
        </TableCell>
        <TableCell align="center">{row.status}</TableCell>
        <TableCell align="right" className="!hidden lg:!table-cell">
          {row.date}
        </TableCell>
        <TableCell align="right" className="!hidden lg:!table-cell">
          {row.expiration}
        </TableCell>
        <TableCell align="right" className="!hidden lg:!table-cell">
          {row.no_ref}
        </TableCell>
        <TableCell align="right" className="!hidden lg:!table-cell">
          {row.ext_ref}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={13}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
              ></Typography>
              <div className="flex ...">
                <div className="w-14 flex-none ...">01</div>
                <div className="w-32 flex-none ...">02</div>
                <div className="flex-1 ...">03</div>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default OrderRow;
