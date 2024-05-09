import React, { Fragment } from "react";

const Table = ({ data, config }) => {
  // Nested Mapping
  const renderedRows = data.map((row) => {
    const renderedCells = config.map((col) => {
      return (
        <td className="p-3" key={col.label}>
          {col.render(row)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={row.name}>
        {renderedCells}
      </tr>
    );
  });

  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
