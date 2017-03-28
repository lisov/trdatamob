import {connect} from 'react-redux';
import {store} from '../store';

import Header from './Header';
import Sidebar from './Sidebar';

import {WidgetWrap} from './basic/WidgetWrap';
import {SearchRes} from './SearchRes';
import FoldedWidget from './basic/FoldedWidget';

import Rss from './news/Rss';
import {RussiaMarketFx} from './russia/RussiaMarketFx';
import {WorldMarketFx} from './world/WorldMarketFx';
import {WorldCommodity} from './world/WorldCommodity';




const App = React.createClass({

  section: function() {
      switch (this.props.widgetName) {
        case 'RussiaMarketFx':
          return <WidgetWrap><RussiaMarketFx title={ this.props.widgetTitle } name={ this.props.widgetName }  /></WidgetWrap>
        break;
        case 'WorldMarketFx':
          return <WidgetWrap><WorldMarketFx title={ this.props.widgetTitle } name={ this.props.widgetName } /></WidgetWrap>
        break;
        case 'WorldCommodity':
          return <WidgetWrap><WorldCommodity title={ this.props.widgetTitle } name={ this.props.widgetName }  /></WidgetWrap>
        break;
      }
  },


  render: function() {

    return (
      <div>
        <div id="main">
          <Header/>
            
            { this.props.searching ? <SearchRes searchRes={this.props.searchRes} totalResults={this.props.totalResults} userState={this.props.userState}/> : this.props.widgetName.length ? this.section() : <Rss/> }

            { this.props.foldedWidgets.length 
              ? (<div className="foldedWidgets">
                  {this.props.foldedWidgets.map(function(el,k) {
                    return (
                        <FoldedWidget 
                          key={k}
                          widgetTitle={el.widgetTitle}
                          widgetName={el.widgetName}
                        />
                    )
                  })}
                </div>/*show foldet widgets*/) 
              : null
            }
        
        </div>
        <Sidebar />
      </div>
    )
  }
});


function mapStateToProps (state) {
  return {
    widgetName:       state.widgetState.widgetName,
    widgetTitle:      state.widgetState.widgetTitle,
    foldedWidgets:    state.widgetState.foldedWidgets,
    userState:        state.userState,
    searchRes:        state.searchReducer.searchres,
    totalResults:        state.searchReducer.totalResults,
    searching:        state.searchReducer.searching
  }
}

export default connect(mapStateToProps)(App)

