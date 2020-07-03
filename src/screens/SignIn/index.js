import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from './SignInActions';

const SignIn = (props) => {
  const { account, signIn } = props;

  const submitHandler = (e) => {
    e.preventDefault();

    signIn({ email: 'dbz@gmail.com', password: '123456' });
  }

  console.log('### SignIn.account', account);

  return (
    <div className="container h-100 pt-5">
      <h1>Sign In</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div>
            <button type="submit" className="btn btn-primary btn-round">Login</button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Don't have an account?</div>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { account: state.signIn.account };
}

export default connect(mapStateToProps, { signIn })(SignIn);
