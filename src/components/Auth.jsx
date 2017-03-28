import {connect} from 'react-redux';
import {MarketsMenu} from './MarketsMenu';
import {loc} from './basic/localize.js';
require('../style/auth.scss');

import {store} from '../store';


const Auth = React.createClass({

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

    render: function() {
        return (
            <div className="userBlock">
                 {this.props.userState.auth 
                    ? (
                        <div>
                            <div id="user">
                                <div className="userAva">
                                    <img src={'url'}/>
                                </div>
                                <div className="userInfo">
                                    <div className="">{this.props.userState.userData.user_name_en}</div>
                                    <div className="userPosition">{this.props.userState.userData.user.comp_name}</div>
                                </div>
                            </div>

                            <div className="logOut" onClick={this.logOut}>{loc.log_out}</div>
                        </div>

                    ): (
                    <form onSubmit={this.logIn}>
                        <input type="text" placeholder={loc.login} id="login"/>
                        <input type="password" placeholder={loc.pass} id="pass"/>
                        {this.props.userState.authError ? <div className="authError">{loc.authError}</div> : null}
                        <input type="submit" className="logInBtn" value={loc.log_in}/>
                    </form>
                )}
            </div>
        )
    }
});

function mapStateToProps (state) {
  return {
    userState: state.userState
  }
}

export default connect(mapStateToProps)(Auth)