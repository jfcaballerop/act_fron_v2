import React, { Component } from "react";
import axios from 'axios';
import { Grid, Row, Col, Table, thead, tr, th, tbody, Glyphicon, Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// import { css } from 'glamor';

// components
import Paginacion from '../components/Paginacion'


// services
import ROUTESNAME from '../services/routesName'

// assets
import './App.scss';


export default class ActuacionesConsOrd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSidenav: false,
            error: null,
            isLoaded: false,
            items: []


        };
    }
    toggleSidenav = () => {
        this.setState({ showSidenav: !this.state.showSidenav });

    }
    componentDidMount = () => {

        axios.get(ROUTESNAME.getActConsOrd(), ROUTESNAME.getSessionToken('sessionUserSga'))
            .then((response) => {
                if (response.status === 200) {
                    this.setState((prevState, props) => ({
                        isLoaded: true,
                        items: response.data
                    }))
                } else {
                    this.setState({
                        isLoaded: true,
                        error: response.status
                    });
                }

                // console.log('State ListaActuacion2', this.state)

            })
    }

    showNested = (cell, row) => {
        return cell.$oid;
    }
    afterSaveCell = (row, cellName, cellValue) => {
        // do your stuff...
        // console.log(JSON.stringify(row))
        axios.put(ROUTESNAME.putActConsOrd(row._id.$oid), row, ROUTESNAME.getSessionToken('sessionUserSga'))
            .then((response) => {
                if (response.status === 200) {
                    this.setState((prevState, props) => ({
                        updatedRow: response.data
                    }))
                    toast(cellName + ': ' + cellValue + '. Actualizacion correcta.', {
                        // position: "top-center",
                        // autoClose: 60000,
                        // hideProgressBar: true,
                        // closeOnClick: true,
                        // pauseOnHover: true,
                        // draggable: true,
                        draggablePercent: 60,
                        className: 'toast-success',
                        bodyClassName: 'toast-success',
                        // progressClassName: css({
                        //     background: "repeating-radial-gradient(circle at center, red 0, blue, green 30px)"
                        // })
                    })
                } else {
                    this.setState({
                        error: response.status
                    });
                }

                // console.log('State ListaActuacion2', this.state)

            })
    }
    render() {
        const { error, isLoaded, items } = this.state;
        const tableOptions = {
            prePage: <i className='glyphicon glyphicon-chevron-left' />,
            nextPage: <i className='glyphicon glyphicon-chevron-right' />,
            firstPage: <i className='glyphicon glyphicon-step-backward' />,
            lastPage: <i className='glyphicon glyphicon-step-forward' />,
            defaultSortName: 'code',
            defaultSortOrder: 'asc'
        };
        const selectRow = {
            mode: 'radio',  // single select
            clickToSelectAndEditCell: true

        };
        const cellEdit = {
            afterSaveCell: this.afterSaveCell,
            blurToSave: true,
            mode: 'dbclick' // double click cell to edit
        };
        if (error) {
            return <div {...this.props}>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div {...this.props} >Loading...</div>;
        } else {
            return (
                <Grid className="ActuacionesConsOrd">

                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <h1>Actuaciones de Conservacion Ordinaria</h1>
                        </Col>

                    </Row>
                    <br />
                    {/* <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <Form inline>
                                <FormGroup controlId="formInlineName">
                                    <ControlLabel>Filtro:</ControlLabel>{' '}
                                    <FormControl type="text" placeholder="codigo o descripcion" />
                                </FormGroup>{' '}

                                <Button type="submit"><Glyphicon glyph="search"></Glyphicon></Button>
                            </Form>
                        </Col>

                    </Row> */}
                    <br />
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar
                                newestOnTop
                                closeOnClick
                                rtl={false}
                                pauseOnVisibilityChange
                                draggable
                                pauseOnHover
                            />

                            <BootstrapTable
                                data={items}
                                options={tableOptions}
                                exportCSV csvFileName='actuaciones-list'
                                pagination
                                columnFilter
                                search multiColumnSearch searchPlaceholder='Codigo o Descripcion...'
                                multiColumnSort={2}
                                striped
                                hover
                                selectRow={selectRow}
                                cellEdit={cellEdit} >
                                <TableHeaderColumn dataField='_id' dataFormat={this.showNested} isKey={true}>Act ID</TableHeaderColumn>
                                <TableHeaderColumn dataField='code' dataSort={true}>Code</TableHeaderColumn>
                                <TableHeaderColumn dataField='desc'>Desc</TableHeaderColumn>
                            </BootstrapTable>
                        </Col>
                    </Row>

                </Grid>
            );
        }
    }
}
