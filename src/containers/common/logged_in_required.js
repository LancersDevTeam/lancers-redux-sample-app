// @flow
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import MESSAGES from '../../messages';


function mapStateToProps(state: Object): Object {
    return {};
}

function mapDispatchToProps(dispatch: Function): Object {
    return {
        // someActions: bindActionCreators(someActions, dispatch),
    };
}

export default function loggedInRequired(WrappedComponent: any) {
    class loggedInRequiredWrappedComponent extends WrappedComponent {
        componentWillMount() {
            // if (!this.state.storeState.session.foobar) {
            if (true) {
                console.log(MESSAGES.LOG_IN_CHECK);
            }
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(loggedInRequiredWrappedComponent);
}
