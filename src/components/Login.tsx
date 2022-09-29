
export const Login = () => {
  return (
    <>
        <h3>Login</h3>

        <div className="alert alert-info">
            Validating...
        </div>

        <div className="alert alert-danger">
            Not Authenticated!
        </div>

        <div className="alert alert-success">
            Authenticated
        </div>

        <button className="btn btn-primary">
            Login
        </button>
        &nbsp;
        <button className="btn btn-danger">
            Logout
        </button>
    </>
  )
}
