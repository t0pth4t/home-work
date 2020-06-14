import { h, Component } from 'preact';
import 'preact-material-components/Button/style.css';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';

import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={`${style.home} page`}>
				<header class={style.header}>
					<div class={style.title}>
						<h1>Home Work</h1>
						<p>Doing the work to maintain your home.</p>
						<Button ripple raised className="mdc-theme--primary-bg">
							Sign Up
        				</Button>
						<Button style="color:#fff" secondary href="#main">learn more</Button>


					</div>
				</header>

				<main id="main">
					<h2>What is Home Work?</h2>
					<p>Easily track maintance and up-keep tasks to maintain the comfort and value of your home</p>
				</main>
			</div>
		);
	}
}
