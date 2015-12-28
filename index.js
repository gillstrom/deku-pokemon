/** @jsx element */
import classnames from 'classnames';
import deku from 'deku';

const {element} = deku;
const propTypes = {
	class: {
		type: 'string'
	},
	name: {
		type: 'string'
	}
};

function render({props}) {
	return <img class={classnames('Pokemon', props.class)} src={`http://img.pokemondb.net/artwork/${props.name.trim().toLowerCase()}.jpg`} alt={props.name}/>;
}

export default {propTypes, render};
