import React, { useContext } from "react";
import DataContext from "../utils/DataContext"

const DataBody = () => {
    const context = useContext(DataContext);

    return (
        <tbody>
        {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ? (
          context.developerState.filteredUsers.map(({ login, name, picture, email, location }) => {
            return (
              <tr key={login.uuid}>
                <td data-th="Image" className="align-middle">
                  <img
                    src={picture.medium}
                    alt={"profile image for " + name.first + " " + name.last}
                    className="img-responsive"
                  />
                </td>
                <td data-th="Name" className="name-cell align-middle">
                  {name.first} {name.last}
                </td>
                <td data-th="Email" className="align-middle">
                  {email}
                </td>
                <td data-th="City" className="align-middle">
                    {location.city}
                </td>
                <td data-th="State" className="align-middle">
                  {location.state}
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    );
  }
  
  export default DataBody;