import React from 'react';


import '../../containers/App.scss';

class ContainerMain extends React.Component {

	render() {
		return (
			<div className="mapa">
				{this.props.mapa}
			</div>

		);
	}
}

export default ContainerMain;