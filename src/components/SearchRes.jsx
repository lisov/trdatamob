require('../style/search.scss');
require('../style/font-awesome-4.7.0/scss/font-awesome.scss');
import {connect} from 'react-redux';
import {loc} from './basic/localize.js';

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

export const SearchRes = React.createClass({

	render: function() {

        return ( 
    			<div className="searchRes">
            		<div className="serchResTitle">
            			{this.props.totalResults ? null : loc.searchResZero}
            		</div>
            		{this.props.searchRes.rssnews.length 
            			? 	<div>
                				<div className="searchTitle">{loc.rssnews}:{!this.props.userState.auth ? '*' : null}</div>
                				{this.props.searchRes.rssnews.map(function(n,i) {

	                				return <ShowNews 
	                					key 	= {i}
	                					title 	= {this.props.langEn ? n.title_en : n.title_ru}
	                					url 	= {n.url}
	                				/>
	                			}.bind(this))}
                			</div>
            			: 	null
            		}

            		{this.props.userState.auth && this.props.searchRes.asset.length 
            			? 	<div>
                				<div className="searchTitle">{loc.quotes}:</div>
	                			{this.props.searchRes.asset.map(function(n,i) {
	                				return <ShowAsset 
	                					key 	= {i}
	                					title 	= {this.props.langEn ? n.title_en : n.title_ru}
	                				/>
	                			}.bind(this))}
            				</div>
            			: 	null
            		}
            		{!this.props.userState.auth && this.props.totalResults > this.props.searchRes.rssnews.length ? <div className="hiddenRes">*{loc.hiddenRes}</div>: null}
            	</div>
        )
    }

});

