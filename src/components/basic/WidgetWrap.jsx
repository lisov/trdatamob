import {store} from '../../store';

require('../../style/widget.scss');

export const WidgetWrap = React.createClass({

	closeWidget: () => {
		store.dispatch({
	        type: 'closeWidget'
	    });
    },
    
    foldWidget: function() {
        store.dispatch({
            type: 'foldWidget',
            widgetTitle: this.props.children.props.title,
            widgetName: this.props.children.props.name
        });
    },

    render: function() {
        return (
            <div>
                <div className="widgetHeader">
               		<div className="widgetTitle">{ this.props.children.props.title }</div>
                    <div className="widgetClose" onClick={ this.closeWidget }></div>
                    <div className="widgetFold" onClick={ this.foldWidget }></div>
                </div>
                <div className="widgetBody">{ this.props.children  }</div>
            </div>
        )
    }
});