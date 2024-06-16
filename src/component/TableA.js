import React from 'react';

const TableA = ({ children }) => {
  return (
    <tr className="row_table">
      {
        children
      }
    </tr>
  )
}

export default TableA;
