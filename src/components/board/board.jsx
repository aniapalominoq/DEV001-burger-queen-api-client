import React from 'react';
import { useState, useEffect } from 'react';
import DataTable, {createTheme} from 'react-data-table-component';

const Board = () => {
  const [pedido, setpedido] = useState([]);
  const URL = 'http://localhost:5003/Products'
  const showData = async () => {
    const response = await fetch(URL)
    const data= await response.json()
    console.log(data)
    setpedido(data)
  }
  useEffect(() => {
    showData()
  }, []);

const columns = [
{
  name: 'ID',
  selector: row => row.id
},
{
  name: 'DESCRIPTION',
  selector: row => row.name
},
{
  //aki debemos colocar row. la suma de la cantidad de productos que pidan
  name: 'AMOUNT',
  selector: row => row.price
},
{
  name: 'TOTAL',
  selector: row => row.total
},
{
  name: 'EDIT',
},
{
  name: 'DELETE',
},

]

    return (
      <div className='App'>
       <DataTable
       columns={columns}
       data={pedido}
       
/>
</div>


// {/* <div className="table-container">
// <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
//   <thead className='has-background-grey-light'>
//     <tr>
//       <th>ID</th>
//       <th>DESCRIPTION</th>
//       <th>AMOUNT</th>
//       <th>TOTAL</th>
//       <th><abbr title="Drawn"></abbr></th>
//       <th><abbr title="Lost"></abbr></th>
//     </tr>
//   </thead>
//   <tbody className='has-background-grey-lighter'>
//     <tr>
//       <th>1</th>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td><img src="https://img.icons8.com/external-soft-fill-juicy-fish/40/null/external-edit-essentials-soft-fill-soft-fill-juicy-fish.png"/></td>
//       <td><img src="https://img.icons8.com/plasticine/50/null/filled-trash.png"/></td>
//     </tr>
//   </tbody>
//        </table>
// </div> */}


    );
}

export default Board;
