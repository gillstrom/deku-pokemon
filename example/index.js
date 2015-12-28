/** @jsx element */
import deku from 'deku';
import Pokemon from '../';

const {dom, element} = deku;
const render = dom.createRenderer(document.body);
const App = {
	render: () => <Pokemon class='Test' name='pikachu'/>
};

render(<App/>);
