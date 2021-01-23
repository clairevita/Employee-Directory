import React, { useState, useEffect } from "react";
import Table from "./Table";
import API from "../utils/API";
import DataContext from "../utils/DataContext"
import Search from "./Search"

const DataArea = () => {
    const [developerState, setDeveloperState] = useState({
        users: [],
        altUserList: [],
        headings: [
            { name: <Search />, width: "30%", },
            { name: "Email •", width: "20%", },
            { name: "City •", width: "20%", },
            { name: "State •", width: "20%", }
        ]
    });

    const handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
            let values = item.email.toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });

        setDeveloperState({
            ...developerState,
            altUserList: filteredList
        });
    };

    const handleSorting = heading => {
            if (heading.name === "Email •" || heading.name === "Email ▲"){
                console.log(heading);
                const emailSort = developerState.altUserList.sort((a, b)=> (a.email > b.email)? 1: -1);                setDeveloperState({
                    ...developerState,
                    altUserList: emailSort,
                    headings: [
                        { name: <Search />, width: "30%", },
                        { name: "Email ▼", width: "20%", },
                        { name: "City •", width: "20%", },
                        { name: "State •", width: "20%", }
                    ]
                });
            } else if (heading.name === "City •" || heading.name === "City ▲"){
                console.log(heading);
                const citySort = developerState.altUserList.sort((a, b)=> (a.location.city > b.location.city)? 1: -1);
                setDeveloperState({
                    ...developerState,
                    altUserList: citySort,
                    headings: [
                        { name: <Search />, width: "30%", },
                        { name: "Email •", width: "20%", },
                        { name: "City ▼", width: "20%", },
                        { name: "State •", width: "20%", }
                    ]
                });
            } else if (heading.name === "State •" || heading.name === "State ▲"){
                console.log(heading);
                const citySort = developerState.altUserList.sort((a, b)=> (a.location.state > b.location.state)? 1: -1);
                setDeveloperState({
                    ...developerState,
                    altUserList: citySort,
                    headings: [
                        { name: <Search />, width: "30%", },
                        { name: "Email •", width: "20%", },
                        { name: "City •", width: "20%", },
                        { name: "State ▼", width: "20%", }
                    ]
                });
            } else if (heading.name === "Email ▼") {
                const stateSort = developerState.altUserList.sort((a, b)=> (a.email > b.email)? -1: 1);
                console.log(heading);
                setDeveloperState({
                    ...developerState,
                    altUserList: stateSort,
                    headings: [
                        { name: <Search />, width: "30%", },
                        { name: "Email ▲", width: "20%", },
                        { name: "City •", width: "20%", },
                        { name: "State •", width: "20%", }
                    ]
                });

            } else if (heading.name === "City ▼") {
                const stateSort = developerState.altUserList.sort((a, b)=> (a.location.city > b.location.city)? -1: 1);
                console.log(heading);
                setDeveloperState({
                    ...developerState,
                    altUserList: stateSort,
                    headings: [
                        { name: <Search />, width: "30%", },
                        { name: "Email •", width: "20%", },
                        { name: "City ▲", width: "20%", },
                        { name: "State •", width: "20%", }
                    ]
                });

            } else if (heading.name === "State ▼") {
                const stateSort = developerState.altUserList.sort((a, b)=> (a.location.state > b.location.state)? -1: 1);
                console.log(heading);
                setDeveloperState({
                    ...developerState,
                    altUserList: stateSort,
                    headings: [
                        { name: <Search />, width: "30%", },
                        { name: "Email •", width: "20%", },
                        { name: "City •", width: "20%", },
                        { name: "State ▲", width: "20%", }
                    ]
                });

            }
    }

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
            value={{ developerState, handleSearchChange, handleSorting }}
        >
            <div className="data-area">
                <Table /> 
            </div>
        </DataContext.Provider>
    );
}

export default DataArea;