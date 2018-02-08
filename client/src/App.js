import React from 'react';
import NavigationBar from './components/NavigationBar';
import MainHeader from './components/MainHeader';
import MainContent from './components/MainContent';
import './css/style.css';

const App = () =>
	<div>
		<NavigationBar />
		<MainHeader />
		<MainContent />
	</div>;

export default App;
