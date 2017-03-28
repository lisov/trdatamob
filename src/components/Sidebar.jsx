import {connect} from 'react-redux';
import {MarketsMenu} from './MarketsMenu';
import {loc} from './basic/localize.js';
require('../style/sidebar.scss');
import Auth from './Auth';

import {store} from '../store';


const Sidebar = React.createClass({

    logIn: function(e) {
        e.preventDefault();

        var _this = this;
        $.ajax({
            type:"POST",
            url: "url",
            data: {
              login:$('#login').val(),
              password:$('#pass').val()
            },
            success: function(data) {
                if(data.status === "OK") {
                    this.props.dispatch({
                        type: 'logIn',
                        ukey: data.data.ukey,
                        userData: data.data.session
                    });
                } else if (data.status === "FAILURE") {
                    store.dispatch({
                        type: 'authError'
                    });
                }
            }.bind(_this)
        });
    },

    logOut: () => {
        store.dispatch({
            type: 'logOut'
        });
    },

    langToggle: (e) => {
        localStorage.setItem('lang',  e.currentTarget.attributes["data-lang"].value);        
        window.location.reload();
    },

    langVarToggle: (e) => {
        $('.searchLi').toggleClass('openSearchVar');
    },

    render: function() {
        return (
            <div id="sidebar">
                <div className="navBlock">
                		<ul>
                			<MarketsMenu/>
                           
                            <li className="searchLi">

                            </li>
                            <li></li>
                        </ul>
                        <Auth />
                        <div className="langBlock">
                            <div onClick={this.langToggle} className={localStorage.getItem('lang') === "ru" ? "langBold" : null} data-lang="ru">ru</div>
                            <div onClick={this.langToggle} className={localStorage.getItem('lang') === "en" ? "langBold" : null} data-lang="en">en</div>
                        </div>
                </div>
                <div className="getWidgetHint">
                    <div className="emptyArrow"></div>
                    <img src="img/emptyHint.png"/>
                    <div className="emptyHintTitle">{loc.et_title}</div>
                    <div className="emptyHintDesc">{loc.et_desc1}</div>
                </div>
            </div>
        )
    }
});

function mapStateToProps (state) {
  return {
    userState: state.userState
  }
}

export default connect(mapStateToProps)(Sidebar)