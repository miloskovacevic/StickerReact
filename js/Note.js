/**
 * Created by Ana on 11/12/2015.
 */


var Note = React.createClass({
    getInitialState: function(){
        return {
           editing: false,
           milos: "djubre - prvi slucaj"
        }
    },
    edit: function () {
        this.setState({
            editing: true,
            milos: "nije djubre - kliknuo na edit"
        });
    },
    save: function(){

        this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);

        this.setState({
            editing: false,
            milos: "djubre - kliknuo na save"
        });
    },
    remove: function () {
        this.props.onRemove(this.props.index);
        alert("remove note");
    },
    renderDisplay: function() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil" />
                <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash" />
                </span>
            </div>
        );
    },
    renderForm: function(){
        return (
            <div className="note">
                <textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
                <button onClick={this.save} className="btn btn-success btn-sm glyphicon-floppy-disk" />
            </div>
        );
    },
    render: function () {
        //debug purposes...
        console.log(this.state.milos);

        if(this.state.editing)
        {
            return this.renderForm();
        }
        else
        {
            return this.renderDisplay();
        }
    }
});

//parent component for our Notes. Notes will be displayed on the Board
var Board = React.createClass({

    propTypes: {
        count: function(props, propName){
            if (typeof props[propName] !== "number"){
                return new Error("Count property must be a number!");
            }
            if(props[propName] > 100){
                return new Error("Creating " + props[propName] + " notes is ridiculous!");
            }
        }
    },

    getInitialState: function(){
      return {
          notes: [
              'Call Bill',
              'Email Lisa',
              'Make dentist appt',
              'Send Proposal'
          ]
      };
    },

    update: function(newText, i){

        var arr = this.state.notes;
        arr[i] = newText;

        this.setState({
            notes: arr
        });
    },

    remove: function(i){

        var arr = this.state.notes;
        arr.splice(i, 1);

        this.setState({
           notes: arr
        });
    },

    eachNote: function(note, i){
        return (
            <Note key={i}
                index={i}
                onChange={this.update}
                onRemove={this.remove}
                >{note}</Note>
        );
    },

    render: function(){

        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                <p ref="mikac"></p>
            </div>
        );


    }
});

React.render(
    <Board count={10} />,
    document.getElementById("react-container")
);