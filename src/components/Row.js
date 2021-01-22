import React from "react";

function Row(props) {
  return (
    <table>
      {props.results.map(result => (
        <tr>
        <td>
          {result.name.first}
        </td>
        <td>
          {result.name.last}
        </td>
        <td>
          {result.email}
        </td>
        <td>
          {result.login.username}
        </td>
        </tr>
      ))}
      </table>
  );
}

export default Row;
