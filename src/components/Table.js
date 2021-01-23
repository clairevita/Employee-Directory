
import React, { useContext } from "react";
import DataBody from "./DataBody";
import DataContext from "../utils/DataContext";

const Table = () => {
    const context = useContext(DataContext);

    return (
        <div>
            <table className="table table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th style={{ width }}
                                data={{ name }}
                                id="heading"
                                onClick={() => {
                                    context.handleSorting({ name });
                                }}
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