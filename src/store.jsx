import {createStore, combineReducers} from 'redux';

const initialUserState = {
  ukey: 	localStorage.getItem('ukey') ? localStorage.getItem('ukey') : 'ukey',
  auth: 	!localStorage.getItem('ukey') || localStorage.getItem('ukey') === 'ukey'  ? false : true,
  userData:	localStorage.getItem('userData') ?  JSON.parse(localStorage.getItem('userData')) : JSON.stringify({}),
  langEn: 	localStorage.getItem('lang') === 'en',
  authError: false
}

const userReducer = function(state = initialUserState, action) {
  switch(action.type) {
		case 'logIn':
	  		localStorage.setItem('ukey', action.ukey);
	  		localStorage.setItem('userData', JSON.stringify(action.userData));
	    	return Object.assign({}, state, { 
	    		ukey: action.ukey, 
	    		auth: true,
	    		userData: action.userData,
	    		authError: false
	    	});

	    break;

	    case 'authError':
	    	return Object.assign({}, state, { 
	    		authError: true
	    	});

	    break;


	    case 'logOut':
	  		localStorage.setItem('ukey', 'ukey');
	  		localStorage.setItem('userData', JSON.stringify({}));
	    	return Object.assign({}, state, { ukey: 'ukey', auth: false });
	    break;

	  }
  return state;
}

const initialSearchState = {
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

const searchReducer = function(state = initialSearchState, action) {
	// debugger;
  switch(action.type) {

  		case 'stopSearch':
	    	return Object.assign({}, state, { searching: false});
	    break;

	    case 'setRes':
	    	return Object.assign({}, state, { searching: true, searchres: action.searchres, totalResults: action.totalResults });
	    break;

	  }
  return state;
}

const initialWidgetState = {
  widgetName: localStorage.getItem('widget') ? localStorage.getItem('widget') : '',
  widgetTitle: localStorage.getItem('widgetTitle') ? localStorage.getItem('widgetTitle') : '',
  foldedWidgets: localStorage.getItem('foldedWidgets') ?  JSON.parse(localStorage.getItem('foldedWidgets')) : []
}

// The Widget Reducer
const widgetReducer = function(state = initialWidgetState, action) {
	switch(action.type) {
		case 'openWidget':
			// delete current widget from hiddens arr
			state.foldedWidgets.map(function(el,k){
		        if (el.widgetName === action.widgetName) {
		          delete state.foldedWidgets.splice(k,1);
		        }
		    });
		    localStorage.setItem('foldedWidgets', JSON.stringify(state.foldedWidgets));
			localStorage.setItem('widget', action.widgetName);
			localStorage.setItem('widgetTitle', action.widgetTitle);
		    return Object.assign({}, { widgetName: action.widgetName, widgetTitle: action.widgetTitle, foldedWidgets: state.foldedWidgets });
		break;

		case 'foldWidget':
		
			state.foldedWidgets.unshift({widgetName:action.widgetName, widgetTitle:action.widgetTitle});
			localStorage.setItem('foldedWidgets', JSON.stringify(state.foldedWidgets));
			localStorage.setItem('widget', '');
		    return Object.assign({}, { widgetName: "", foldedWidgets: state.foldedWidgets });;
		break;

		case 'closeWidget':
			localStorage.setItem('widget', '');
		    return Object.assign({}, { widgetName: "", foldedWidgets: state.foldedWidgets });
		break;	
	}
  return state;
}

// Combine Reducers
const reducers = combineReducers({
  userState: 		userReducer,
  widgetState: 		widgetReducer,
  searchReducer: 	searchReducer
});

export const store = createStore(reducers);

