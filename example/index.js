/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import Pokemon from '../';

function initialState() {
	return {
		name: 'Pikachu'
	};
}

function rndr({state}, setState) {
	const {name} = state;

	return (
		<div>
			<input type='text' value='Pikachu' onKeyUp={e => setState({name: e.target.value})}/>
			<br/>
			<Pokemon name={name}/>
		</div>
	);
}

const App = {
	initialState,
	render: rndr
};

render(tree(<App/>), document.body);
