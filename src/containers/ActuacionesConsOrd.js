import React, { Component } from "react";
import axios from 'axios';
import { Grid, Row, Col, Table, thead, tr, th, tbody, Glyphicon, Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

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
                            <BootstrapTable
                                data={items}
                                options={tableOptions}
                                exportCSV csvFileName='actuaciones-list'
                                pagination
                                columnFilter
                                search multiColumnSearch
                                searchPlaceholder='Codigo o Descripcion...'
                                multiColumnSort={2}>
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
