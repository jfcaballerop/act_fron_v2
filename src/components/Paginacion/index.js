import React, { Component } from "react";
import { Pagination } from "react-bootstrap";

class Paginacion extends Component {

    render() {
        let active = 7;
        let items = [];
        for (let number = 1; number <= 10; number++) {
            items.push(
                <Pagination.Item active={number === active}>{number}</Pagination.Item>
            );
        }
        return (
            <div>
                <Pagination bsSize="small">{items}</Pagination>
            </div>
        )
    }

}

export default Paginacion;