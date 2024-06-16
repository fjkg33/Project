import React from 'react';
import './Table.css';

const Table = props => {
  const { headersName, children } = props;

  return (
    <table className="to-table">
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <td className="header_table" key={index}>{ item }</td>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          children
        }
      </tbody>
    </table>
  )
}

export default Table;
