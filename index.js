/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	class: {
		type: 'string'
	},
	name: {
		type: 'string'
	}
};

function render({props}) {
	const {name} = props;
	return <img class={['Pokemon', props.class]} src={`http://img.pokemondb.net/artwork/${name.trim().toLowerCase()}.jpg`} alt={name}/>;
}

export default {propTypes, render};
