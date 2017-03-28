var moment = require('moment');
require('../../style/rss.scss');
import {store} from '../../store';

import {connect} from 'react-redux';

const RssItem = React.createClass({
    render: function() {
        return (
            <a className="rssLink" href={this.props.url} target="_blank">
                <div className="rssTime">{this.props.date_at}</div>
                <div className="rssTitle">{this.props.title}</div>
                <div className="rssAuthor">{this.props.comp_name}</div>
            </a>
        )
    }
});


const Rss = React.createClass({

    getInitialState: function() {
        return {
            rss: []
        }
    },

    componentDidMount: function() {

        var getData = function( ) {
            var url = 'url';
            this.serverRequest = $.get(url, function (result) {
                this.setState({
                    rss: result.data.reverse()
                });
            }.bind(this));  
        }.bind(this);

        getData();

        this.tenMinUpdate = setInterval(getData,100000);
    },
    componentWillUnmount: function() {

        clearInterval(this.tenMinUpdate);
        this.serverRequest.abort();  
    },
    render: function() {

        return (
            <div className="rssBlock">
                {this.state.rss.map(function(el,k){
                    return (
                        <RssItem
                            key         = {k}
                            title       = {el.tl.length < 100 ? el.tl : el.tl.substr(0,100) + "..."}
                            comp_name   = {el.fn}
                            date_at     = {moment.unix(el.ts).format("H:mm")}
                            url         = {"url"}
                            />
                    )
                }.bind(this))}

            </div>
        )
    }
});

function mapStateToProps (state) {
  return {
    userState: state.userState
  }
}

export default connect(mapStateToProps)(Rss)
