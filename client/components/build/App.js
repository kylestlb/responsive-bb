


var BBApp = React.createClass({displayName: "BBApp",
	render: function() {
		return (
			React.createElement("div", {className: "pure-g wrapper"}, 
			"Outer App component"
			)
		);
	}
});
console.log("pre render");
React.renderComponent(React.createElement(BBApp, null),document.querySelector('#app'));

