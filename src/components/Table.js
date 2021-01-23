  
import React, { useContext } from "react";
import DataBody from "./DataBody";
import DataContext from "../utils/DataContext";

const Table = () => {
    const context = useContext(DataContext);

    return (

        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    key={name}
                                    style={{ width }}
                                >
                                    {name}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <DataBody />
            </table>
        </div>
    );
}

export default Table;