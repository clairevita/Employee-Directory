import React, { useState, useEffect } from "react";
import Table from "./Table";
import API from "../utils/API";
import DataContext from "../utils/DataContext"
import Search from "./Search"

const DataArea = () => {
    const [developerState, setDeveloperState] = useState({
        users: [],
        order: "ascend",
        altUserList: [],
        headings: [
            { name: "Name", width: "20%", },
            { name: "Email", width: "20%", },
            { name: "City", width: "20%", },
            { name: "State", width: "20%", }
        ]
    });

    const handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
            let values = item.name.first.toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });

        setDeveloperState({
            ...developerState,
            altUserList: filteredList
        });
    };

    useEffect(() => {
        API.getRandomUser().then(results => {
            setDeveloperState({
                ...developerState,
                users: results.data.results,
                altUserList: results.data.results
            });
        });
    }, []);

    return (
        <DataContext.Provider
            value={{ developerState, handleSearchChange }}
        >
            <Search />
            <div className="data-area">
                <Table /> 
            </div>
        </DataContext.Provider>
    );
}

export default DataArea;