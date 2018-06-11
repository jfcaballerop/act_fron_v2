import React from 'react';
import { Button, Glyphicon, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import axios from 'axios';
import ROUTESNAME from '../services/routesName.js';
import './App.scss';
import Pagination from "react-js-pagination";


class ContentAdminUserList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			listaContenido: "" ,
			pagina: 1,
			itemsperpage:16
		}
	}

	componentDidMount() {
		this.getUsersList()
	}

	getUsersList = () => {
		axios.get(ROUTESNAME.showusers(), ROUTESNAME.getSessionToken('sessionUserSga'))
			.then((response) => {
				if (response.status === 200) {
					this.setState({ listaContenido: response.data })
				}
			});
	}

	getValue = (item,keychild) => {
		if(typeof item[keychild] == 'string' || typeof item[keychild] == 'number' ){
			return item[keychild]
		}else if (item[keychild].constructor == {}.constructor && keychild == "_id"){
			return item[keychild].$oid
		}else if ( item[keychild].constructor == {}.constructor || item[keychild].constructor == [].constructor ){
			return Object.keys(item[keychild]).map((subrow,subkey) =>
				this.getValue(item[keychild],subrow)
			)
		}
	}

	paginacion = () => {
		let active = this.state.pagina;
		let paginas = (this.state.listaContenido.length % 8 == 0 ?  (this.state.listaContenido.length / 8) :  (this.state.listaContenido.length / 8) + 1)
		let items = [];
		for (let number = 1; number <= paginas; number++) {
		  items.push(
		    <Pagination.Item onSelect={(page) => this.changePage(page)} active={number === active}>{number}</Pagination.Item>
		  );
		}

		return (<Pagination
          activePage={this.state.pagina}
          itemsCountPerPage={this.state.itemsperpage}
          totalItemsCount={this.state.listaContenido.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />)
	}

	  handlePageChange = pageNumber =>  {
	    this.setState({pagina: pageNumber});
	  }

	render() {
		return (
			<div className="AdministracionComponentUser">
				<div className="content">
					<header>
						<div className="group-select">
							<FormGroup controlId="formControlsSelect">
								<ControlLabel>Grupo</ControlLabel>
								<FormControl componentClass="select" placeholder="select">
									<option value=""></option>
								</FormControl>
							</FormGroup>
						</div>
						<div className="buttons-users-header">
							<Button className="icon-search">
								<Glyphicon glyph="glyphicon glyphicon-search" />
							</Button>
							<Button>
								Añadir usuario
							</Button>
						</div>
					</header>
					<section>
						{this.state.listaContenido ? 
						<table responsive className="TableShowAdmin">
							<thead>
								<tr>
									{
										Object.keys(this.state.listaContenido[0]).map((row, key) =>
											<th key={key}>

												{row}
											</th>)
									}
								</tr>
							</thead>
							<tbody>
								{
									this.state.listaContenido.slice((this.state.pagina * this.state.itemsperpage) - this.state.itemsperpage, (this.state.pagina * this.state.itemsperpage)).map((item, key) => 
										<tr key={key}>
										
												
												{
													Object.keys(item).map((row2, key2) =>{

														return(
														
															<td>
													{
														this.getValue(item,row2)
													}
															
															
															</td>
															)
													}
														
													)
												}
											

										</tr>
									)
								}
							</tbody>
						</table> : ""
					}
					</section>
					<footer className="footer-pagination">
						{this.paginacion()}
					</footer>
				</div>
			</div>
		);
	}
}

export default ContentAdminUserList;