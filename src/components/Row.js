import React from "react";

function Row(props) {
  return (
    <table>
        <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>City</th>
      <th>State</th>
      <th>Email</th>
    </tr>
  </thead>
      {props.results.map(result => (
        <tr>
        <td>
          {result.name.first}
        </td>
        <td>
          {result.name.last}
        </td>
        <td>
          {result.location.city}
        </td>
        <td>
          {result.location.state}
        </td>
        <td>
          {result.email}
        </td>
        </tr>
      ))}
      </table>
  );
}

export default Row;
