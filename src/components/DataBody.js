import React, { useContext } from "react";
import DataContext from "../utils/DataContext"

const DataBody = () => {
    const context = useContext(DataContext);

    return (
        <tbody>
            {context.developerState.altUserList.map(({ login, name, email, location }) => {
                    return (
                        <tr key={login.uuid}>
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
                })}
        </tbody>
    );
}

export default DataBody;