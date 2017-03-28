import {connect} from 'react-redux';
import {store} from '../../store';

const FoldedWidget = React.createClass({
    showWidget: function() {
      

      // if we have opening widget - hide him
      if (this.props.widgetState.widgetName.length) {
        store.dispatch({
            type: 'foldWidget',
            widgetName:this.props.widgetState.widgetName,
            widgetTitle:this.props.widgetState.widgetTitle
        });
      }
      store.dispatch({
          type: 'openWidget',
          widgetName: this.props.widgetName,
          widgetTitle: this.props.widgetTitle
      });
    },

    closeFoldWidget: function(e) {
      
      this.props.widgetState.foldedWidgets.map(function(el,k){
        if(el.widgetName === this.props.widgetName){
          delete this.props.widgetState.foldedWidgets[k];
        }
      }.bind(this));
      e.currentTarget.parentElement.style = "display:none";
    },

    render: function() {
        return (
            <div className="foldedWidget widgetHeader">
                <div className="widgetTitle" onClick={ this.showWidget }>{ this.props.widgetTitle }</div>

                <div className="widgetClose" onClick={ this.closeFoldWidget }></div>
                <div className="widgetShowBlock" onClick={ this.showWidget }><div className="widgetShow" ></div></div>
            </div>
        )
    }
});

function mapStateToProps (state) {
  return {
    widgetState: state.widgetState
  }
}

export default connect(mapStateToProps)(FoldedWidget)