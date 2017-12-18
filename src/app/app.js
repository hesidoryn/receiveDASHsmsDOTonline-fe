import Router from 'preact-router';
import { h, render } from 'preact';
 /** @jsx h */

const App = () => (
	<Router>
		<Home path="/" />
		<Number path="/some_number" />
	</Router>
);

render(<Main />, document.body);