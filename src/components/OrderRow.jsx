import React, { useState } from "react";
import {
  Collapse,
  Divider,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function OrderRow(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset !important" } }}>
        <TableCell>
          <div className="flex items-center">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            {row.account}
          </div>
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
          <Collapse
            className="px-2"
            in={open}
            timeout="auto"
            unmountOnExit
          >
            <Box sx={{ marginBottom: 1 }}>
              <Typography variant="h6" gutterBottom component="div" />
              <div className="bg-blue-50 px-2 py-2 rounded">
                <div className="flex items-baseline place-content-between py-2">
                  <div className="mr-2 text-b font-bold text-blue-500">
                    {row.title}
                  </div>
                  <div className="mr-2 lg:flex-1 ">
                    <div>
                      <a
                        className="hidden lg:block bg-white text-sky-700 border border-zinc-300 py-1 px-7 rounded-full w-fit"
                        component="button"
                        variant="body2"
                      >
                        <p className="flex font-medium">
                          Full review details
                          <OpenInNewIcon fontSize="small" />
                        </p>
                      </a>
                    </div>
                    <a
                      className="lg:hidden text-sky-700 rounded-full w-fit"
                      component="button"
                      variant="body2"
                    >
                      <OpenInNewIcon fontSize="small" />
                    </a>
                  </div>
                  <div className="hidden lg:block mr-12">
                    <button
                      type="submit"
                      className="bg-sky-700 text-white px-9 rounded-full lg:ml-1 w-full lg:w-auto"
                      style={{ height: "calc(2.25rem)" }}
                    >
                      ACCEPT
                    </button>
                    <button
                      type="submit"
                      className="bg-white text-red-700 border border-red-70 px-9 rounded-full lg:ml-1 w-full lg:w-auto"
                      style={{ height: "calc(2.25rem)" }}
                    >
                      Reject
                    </button>
                  </div>
                </div>
                <Divider/>
                <div className="grid my-2 lg:grid-cols-4 grid-cols-2">
                  <div>Net Amount: <b className="pl-2">{row.net_amount}</b></div>
                  <div>Price: <b className="pl-2">{row.price}</b></div>
                  <div>Exchange Rate: <b className="pl-2">{row.exchange_rate}</b></div>
                  <div>O/S Limit: <b className="pl-2">{row.os_limit}</b></div>
                  <div>Reference Number: <b className="pl-2">{row.ref_number}</b></div>
                  <div>Date/Time: <b className="pl-2">{row.date_time}</b></div>
                  <div>Telephone: <b className="pl-2">{row.tel}</b></div>
                  <div>User ID: <b className="pl-2">{row.user_id}</b></div>
                </div>
                <div className="p-3 bg-zinc-50 rounded my-2">
                  <p className="font-semibold text-sky-900">Warning(s)</p>
                  <ul className="list-disc ml-4 text-gray-800">
                    {row.warnings.map((warning, i) => (
                      <li key={row.ref_id + "" + i}>{warning}</li>
                    ))}
                  </ul>
                </div>
                <div className="lg:hidden grid grid-cols-2 gap-4">
                    <button
                      type="submit"
                      className="bg-sky-700 text-white rounded-full lg:ml-1 w-full lg:w-auto"
                      style={{ height: "calc(2.25rem)" }}
                    >
                      ACCEPT
                    </button>
                    <button
                      type="submit"
                      className="bg-white text-red-700 border border-red-70 rounded-full lg:ml-1 w-full lg:w-auto"
                      style={{ height: "calc(2.25rem)" }}
                    >
                      Reject
                    </button>
                  </div>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default OrderRow;
