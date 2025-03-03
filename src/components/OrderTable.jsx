import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import OrderRow from "./OrderRow";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const OrderTable = (props) => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("date");

  const handleRequestSort = (property) => (event) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const visibleRows = React.useMemo(
    () => stableSort(props.data, getComparator(order, orderBy)),
    [order, orderBy]
  );

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Account</TableCell>
            <TableCell align="center">Operation</TableCell>
            <TableCell align="center">Symbol</TableCell>
            <TableCell className="!hidden lg:!table-cell">
              Description
            </TableCell>
            <TableCell align="center" className="!hidden lg:!table-cell">
              Qty.
            </TableCell>
            <TableCell align="center" className="!hidden lg:!table-cell">
              Filled Qty
            </TableCell>
            <TableCell align="center" className="!hidden lg:!table-cell">
              Price
            </TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell className="!hidden lg:!table-cell">
              <TableSortLabel
                active={orderBy === "date"}
                direction={orderBy === "date" ? order : "asc"}
                onClick={handleRequestSort("date")}
              >
                Date
                {orderBy === "date" ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
            <TableCell className="!hidden lg:!table-cell">
              <TableSortLabel
                active={orderBy === "expiration"}
                direction={orderBy === "expiration" ? order : "asc"}
                onClick={handleRequestSort("expiration")}
              >
                Expiration
                {orderBy === "expiration" ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
            <TableCell className="!hidden lg:!table-cell">No. Ref.</TableCell>
            <TableCell className="!hidden lg:!table-cell">Ext. Ref.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map((order) => (
            <OrderRow key={order.ref_number} row={order} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
