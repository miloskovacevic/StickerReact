/**
 * Created by Ana on 11/11/2015.
 */


var HelloWorld = React.createClass({displayName: "HelloWorld",
    render: function () {
        return (
            React.createElement("div", null, 
            React.createElement("h1", null, "Zdravo sviiijeeeeteeeee"), 
        React.createElement("p", null, "This is some text")
        )
        )
    }
});

React.render(
React.createElement(HelloWorld, null),
    document.body
);