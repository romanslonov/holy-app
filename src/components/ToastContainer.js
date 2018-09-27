import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { clearToast } from '../actions/toast.actions';
import history from '../history';
import Toast from './Toast';

const ToastContainer = (props) => {
  const { toasts, onClearToast } = props;
  const { type, message } = toasts;
  history.listen(() => onClearToast());
  return (
    <div>
      {message && <Toast type={type} message={message} />}
    </div>
  );
};

const mapStateToProps = state => ({
  toasts: state.toast,
});

const mapDispatchToProps = dispatch => ({
  onClearToast: () => dispatch(clearToast()),
});

ToastContainer.propTypes = {
  toasts: PropTypes.object.isRequired,
  onClearToast: PropTypes.func.isRequired,
};

const composedToastContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ToastContainer);

export default composedToastContainer;