


var BBApp = React.createClass({
	render: function() {
		return (
			<div className="pure-g wrapper">
			Outer App component
			</div>
		);
	}
});
console.log("pre render");
React.renderComponent(<BBApp />,document.querySelector('#app'));

