import React from "react";

import DataTable from "react-data-table-component";
import "styled-components";

for (let i = 0; i < localStorage.length; i++) {
  console.log(
    "soy datos de localstorage",
    localStorage.getItem(localStorage.key(i))
  );
}

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

const Board = () => {
  const readLocalStorage = JSON.parse(localStorage.getItem("1"));
  console.log("soy los productos", readLocalStorage);

  /*  const [pedido, setpedido] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    count <= 0 ? setCount(0) : setCount(count - 1);
  };

  const showData = () => {
    setpedido(data);
  };
  useEffect(() => {
    showData();
  }, [selectedRows]);

  const handleButtonClick = () => {
    console.log("clicked");
  };

  const handleChange = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []); */
  /* const handleButtonClick = () => {
    console.log("clicked");
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id_order,
      grow: 0,
      hide: Media.SM,
      center: true,
    },
    {
      name: "DESCRIPTION",
      selector: (row) => row.name_product,
      center: true,
    },
    {
     
      name: "Unit price",
      selector: (row) => row.price_product,
      center: true,
    },
    {
      name: "TOTAL",
      center: true,
    },
    {
      name: "EDIT",
      cell: () => (
        <button onClick={handleButtonClick}>
          <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/35/null/external-edit-web-flaticons-flat-flat-icons-8.png" />
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "DELETE",
      cell: () => (
        <button onClick={handleButtonClick}>
          <img src="https://img.icons8.com/stickers/35/null/delete-forever.png" />
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "20px", // override the row
      },
    },
    headCells: {
      style: {
        paddingLeft: "5px", // override the cell padding for head cells
        paddingRight: "5px",
        backgroundColor: "rgb(99, 233, 152)",
      },
    },
    cells: {
      style: {
        paddingLeft: "2px", // override the cell padding for data cells
        paddingRight: "2px",
        minHeight: "10px",
      },
    },
  };

  return (
    <div className="App">
      <DataTable
        columns={columns}
        data={value}
        title="Orders"
        center="true"
        responsive={true}
        subHeaderAlign={Alignment.CENTER}
        highlightOnHover
        pointerOnHover
        fixedHeaderScrollHeight="true"
        customStyles={customStyles}
        // onColumnOrderChange={selectedRows}
      />
    </div>
  ); */
  return <DataTable columns={columns} data={data} />;
};

export default Board;
