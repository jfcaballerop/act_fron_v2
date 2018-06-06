import React from 'react';
import './App.scss';
import { Link } from "react-router-dom";
import ListaMenuAdministracion from '../assets/jsons/listaMenuAdministracion.js';

class HeaderAdministracion extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			opciones: ListaMenuAdministracion
		}
	}

	render() {
		return (
			<header className="headerAdministracion">
				<ul>
					{
						this.state.opciones.map((item,index) => {
							return(
								<Link to={item.path}>
									<li key={index}>
										{item.name}
									</li>
								</Link>
							)
						})
					}
				</ul>
			</header>
		);
	}
}

export default HeaderAdministracion;