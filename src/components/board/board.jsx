import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { Alignment, Media } from 'react-data-table-component';
import DataTable from 'react-data-table-component';
import 'styled-components'

const Board = () => {
  const [pedido, setpedido] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const URL = 'http://localhost:5003/orders'
  const showData = async () => {
    const response = await fetch(URL)
    const data= await response.json()
    console.log(data)
    setpedido(data)
  }
  useEffect(() => {
    console.log('state', selectedRows);
    showData()
  }, [ selectedRows]);

  const handleButtonClick = () => {
		
		console.log('clicked');
	};

	const handleChange = useCallback(state => {
		setSelectedRows(state.selectedRows);
	}, []);

const columns = [
{
  name: 'ID',
  selector: row => row.id_order,
  grow: 0,
  hide: Media.SM,
  center: true
},
{
  name: 'DESCRIPTION',
  selector: row => row.client_id_client,
  center: true
},
{
  //aki debemos colocar row. la suma de la cantidad de productos que pidan
  name: 'AMOUNT',
  selector: row => row.order_preci_order,
  center: true
},
{
  name: 'TOTAL',
  center: true
},
{
  name: 'EDIT',
  cell: () => <button onClick={handleButtonClick}><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/35/null/external-edit-web-flaticons-flat-flat-icons-8.png"/></button>,
	ignoreRowClick: true,
	allowOverflow: true,
	button: true,
  
},
{
  name: 'DELETE',
  cell: () => <button onClick={handleButtonClick}><img src="https://img.icons8.com/stickers/35/null/delete-forever.png"/></button>,
	ignoreRowClick: true,
	allowOverflow: true,
	button: true,

},

]
const customStyles = {
  rows: {
      style: {
          minHeight: '20px', // override the row 
      },
  },
  headCells: {
      style: {
          paddingLeft: '5px', // override the cell padding for head cells
          paddingRight: '5px',
          backgroundColor: 'rgb(99, 233, 152)'
      },
  },
  cells: {
      style: {
          paddingLeft: '2px', // override the cell padding for data cells
          paddingRight: '2px',
          minHeight: '10px',
         
      },
  },
};

    return (
      <div className='App'>
       <DataTable
       columns={columns}
       data={pedido}
       title="Orders"
       center="true"
       responsive={true}
       subHeaderAlign={Alignment.CENTER}
		   highlightOnHover
		   pointerOnHover
       fixedHeaderScrollHeight= "true"
       customStyles={customStyles}
      //  onColumnOrderChange={selectedRows}
       
/>
  
</div>

    );
}

export default Board;
