import React from "react";
import { readLocalStorage } from "../../helpers/helpers";

import DataTable, { Alignment, Media } from "react-data-table-component";
import "styled-components";
const arrayOrders = readLocalStorage();

const columns = [
  {
    name: "Name product",
    selector: (row) => row.name_product,
    sortable: true,
    hide: Media.SM,
  },
  {
    name: "Unit price",
    selector: (row) => row.price_product,
    sortable: true,
    hide: Media.SM,
  },
  {
    name: "Qty",
    selector: (row) => row.runtime,
    sortable: true,
    right: true,
  },
  {
    cell: () => (
      <div className="control">
        <button className="button">
          <span className="icon is-medium">
            <i className="fa-solid fa-minus"></i>
          </span>
        </button>
      </div>
    ),
  },
  {},
  {
    cell: () => (
      <div className="control">
        <button className="button">
          <span className="icon is-medium">
            <i className="fa-solid fa-plus"></i>
          </span>
        </button>
      </div>
    ),
  },
  {
    cell: () => (
      <div className="control">
        <button className="button">
          <span className="icon is-medium">
            <i className="fa-sharp fa-solid fa-pen-to-square"></i>
          </span>
        </button>
      </div>
    ),
  },
  {
    button: true,
    cell: () => (
      <div className="control">
        <button className="button">
          <span className="icon is-medium">
            <i class="fa-solid fa-trash-can"></i>
          </span>
        </button>
      </div>
    ),
  },
];

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      border: "1px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const Boards = () => {
  return (
    <>
      <DataTable
        title="Orders burger queen"
        columns={columns}
        data={arrayOrders}
        customStyles={customStyles}
        subHeaderAlign={Alignment.Center}
      />
    </>
  );
};

export default Boards;
