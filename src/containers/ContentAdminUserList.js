import React from 'react';
import { Button, Glyphicon, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import axios from 'axios';
import ROUTESNAME from '../services/routesName.js';
import './App.scss';

class ContentAdminUserList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			listaContenido: "" ,
			pagina: 1
		}
	}

	componentDidMount() {
		this.setState({ listaContenido:
			[{
			    "_id": {
			        "$oid": "5b05827b3781b90001005f05"
			    },
			    "login": "admin2",
			    "name": "admin",
			    "password_digest": "$2a$10$JKVDqlVmNZ0Qa.f/0RGlDOLZVNBLrf4cToMR8O1EExGb5SjOHVlce",
			    "role_ids": [
			        {
			            "$oid": "5b0582223781b90001005f04"
			        }
			    ],
			    "roles_val": [
			        {
			            "_id": {
			                "$oid": "5b0582223781b90001005f04"
			            },
			            "code": "admin"
			        }
			    ]
			}] 
		})
	}
/*
	getUsersList = () => {
		axios.get(ROUTESNAME.showusers(), ROUTESNAME.getSessionToken('sessionUserSga'))
			.then((response) => {
				if (response.status === 200) {
					this.setState({ listaContenido: response.data })
				}
			});
	}

*/
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
									this.state.listaContenido.map((row, key) => 
										<tr key={key}>
											{
												Object.keys(this.state.listaContenido[0]).map((row2, key2) =>
													<td key={key2}>
														
														{Array.isArray(row[row2]) ? row[row2][0]._id: row[row2] }
													
													</td>
												)
											}
										</tr>
									)
								}
							</tbody>
						</table> : ""
					}
					</section>
					<footer>
						paginacion
					</footer>
				</div>
			</div>
		);
	}
}

export default ContentAdminUserList;