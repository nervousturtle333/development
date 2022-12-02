import React from "react";

function Checkbox({criteria, filterFunction, filterList}){
    return (
        <div>
        <input type="checkbox" id={criteria} name={criteria} onChange={() => filterFunction(criteria)} checked={filterList.includes(criteria)}/>
            <label htmlFor={criteria}> {criteria} </label>
        </div>
    )
}

export default Checkbox;