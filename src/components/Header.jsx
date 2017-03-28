require('../style/main.scss');
import {connect} from 'react-redux';
import Search from './Search';


const Header = React.createClass({
	
	
	toggleBar: () => {
		
		$('body').toggleClass('openBar');
	
    },


	render: function() {

        return (
            <header>
                <div id="logo"></div>
                <Search />
                <div id="navbar" onClick={this.toggleBar}></div>

            </header>
        )
    }

});

function mapStateToProps (state) {
  return {
    userState: state.userState
  }
}

export default connect(mapStateToProps)(Header)