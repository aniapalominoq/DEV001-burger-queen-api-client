import React from "react";

const Board = () => {
  return (
    <div className="table-container">
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead className="has-background-grey-light">
          <tr>
            <th>ID</th>
            <th>DESCRIPTION</th>
            <th>AMOUNT</th>
            <th>TOTAL</th>
            <th>
              <abbr title="Drawn"></abbr>
            </th>
            <th>
              <abbr title="Lost"></abbr>
            </th>
          </tr>
        </thead>
        <tbody className="has-background-grey-lighter">
          <tr>
            <th>1</th>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <img src="https://img.icons8.com/external-soft-fill-juicy-fish/40/null/external-edit-essentials-soft-fill-soft-fill-juicy-fish.png" />
            </td>
            <td>
              <img src="https://img.icons8.com/plasticine/50/null/filled-trash.png" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Board;
