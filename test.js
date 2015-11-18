import assertElement from 'assert-element';
import componentMock from 'component-mock';
import test from 'ava';
import Pokemon from './';

test('Pokemon', t => {
	const mock = componentMock(Pokemon);
	const el = mock.render({props: {
		class: 'TestClass',
		name: 'Pikachu'
	}});

	assertElement.isNode(el, 'img');
	assertElement.hasClass(el, 'Pokemon');
	assertElement.hasClass(el, 'TestClass');
	assertElement.hasAttribute(el, 'alt', 'Pikachu');
	assertElement.hasAttribute(el, 'src', 'http://img.pokemondb.net/artwork/pikachu.jpg');

	t.end();
});
