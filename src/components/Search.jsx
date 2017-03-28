require('../style/search.scss');
require('../style/font-awesome-4.7.0/scss/font-awesome.scss');
import {connect} from 'react-redux';
import {loc} from './basic/localize.js';
import {store} from '../store';

const ShowNews = React.createClass({
	render: function() {

        return (
            <a href={this.props.url} className="searchNews" target="_blank">
            	{this.props.title}
            </a>
        )
    }
});

const ShowAsset = React.createClass({
	render: function() {

        return (
            <div className="searchAsset">
            	{this.props.title}
            </div>
        )
    }
});

const Search = React.createClass({
	getInitialState: function() {
		return {
			searchres: {
				asset: 		[],
				bondbase: 	[],
				comps: 		[],
				rssnews: 	[],
				ugennews: 	[],
				users: 		[]
			},
			totalResults: 0,
			searching: false
		}
	},
	componentDidMount: function() {
		this.timer = null;	
	},

    toggleSearch: function(e) {
		var $header = $('header'),
			icon = e.currentTarget;

		if ($header.hasClass('searchShow')) {
			$('#logo, #navbar').show();
			
			store.dispatch({type: 'stopSearch'});

			$('.searchInput').hide();
			icon.classList = 'fa fa-search';


			$header.removeClass('searchShow');
			
		} else {

			$('#logo, #navbar').hide();

			$('.searchInput').val('').show().focus();
			icon.classList = 'fa fa-times';
			$header.addClass('searchShow');
			
		}

    },

    search: function(e) {
    	var searchVal = e.currentTarget.value;
    	var _this = this;
    	if (this.timer){
    		console.log('clear');

            clearTimeout(this.timer);
        }

        this.timer = setTimeout(function() {

        	console.log('go');

            if (searchVal.length) {


                var _url = 'url';
                $.get(_url, function (result) {

                    if (this.props.userState.auth) {
                    	store.dispatch({
				            type: 'setRes',
				            searchres: {
                    			asset: 		result.data.asset,
								bondbase: 	result.data.bondbase,
								comps: 		result.data.comps,
								rssnews: 	result.data.rssnews,
								ugennews: 	result.data.ugennews,
								users: 		result.data.users
                    		},
                    		totalResults: 	result.totalResults
				        });

						
                    } else {
                    	store.dispatch({
				            type: 'setRes',
				            searchres: {
								rssnews: 	result.data.rssnews
                    		},
                    		totalResults: 	result.totalResults
				        });
                    }


                }.bind(_this));

            } else {
            	_this.setState({
            		searching: false
            	});
            }

        }, 1000);

    },

	render: function() {

        return ( 
                <div className="searchBlock">
                	<input type="text" autoFocus className="searchInput" placeholder={loc.search} onChange={this.search}/>
                	<i className="fa fa-search" onClick={this.toggleSearch}></i>
                </div>
        )
    }

});

function mapStateToProps (state) {
  return {
    userState: state.userState
  }
}

export default connect(mapStateToProps)(Search)

