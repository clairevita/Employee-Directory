import React, { useContext } from "react";
import DataContext from "../utils/DataContext";

const Search = () => {
    const context = useContext(DataContext);

    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    onChange={e => context.handleSearchChange(e)}
                />
            </form>
        </div>
    );
}
export default Search;