/**
 * Created by Ana on 11/11/2015.
 */


var HelloWorld = React.createClass({
    render: function () {
        return (
            <div>
            <h1>Zdravo sviiijeeeeteeeee</h1>
        <p>This is some text</p>
        </div>
        )
    }
});

React.render(
<HelloWorld/>,
    document.body
);