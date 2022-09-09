import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../store";
import { StoreContext } from "../store/StoreContext";

const colors = ['red', 'green', 'yellow', 'blue'];

const TableComponent = () => {
    const postsData = useSelector((state: IRootState) => state.postReducer.data);
    useEffect(() => {
        console.log('postsData', postsData)

    }, [postsData])
    const { color } = useContext(StoreContext);
    return (
        <div style={{ color: color[0] }}>
            table content
            {colors.map(col =>
                <button
                    onClick={() => color[1](col)}
                    style={{ color: col, width: '40px', height: '40px' }}>{col}
                </button>)}
        </div>
    )
};

export default TableComponent;