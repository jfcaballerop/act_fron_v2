import React from 'react';
import { Button, Glyphicon, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import './App.scss'

class ContentAdminUserList extends React.Component {

	constructor(props) {
		super(props);
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
									<option value="select">select</option>
									<option value="other">...</option>
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
						tabla
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