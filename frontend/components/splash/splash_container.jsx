import { connect } from 'react-redux';
import Splash from './splash';
import  { fetchUsers }  from '../../actions/user_actions';

const mSTP = state => ({
state: state
});

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mSTP, mDTP)(Splash);