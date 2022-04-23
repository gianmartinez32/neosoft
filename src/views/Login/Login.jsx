import React from "react";
import BoxLogin from "../../components/BoxLogin/BoxLogin";
import IMG from "../../assets/img/NEO_BOOKS.png";

export const Login = () => {
  return (
      <>
      <br></br>
      <br></br>
      <br></br>
    <div className="container container fluid">
      <div className="d-flex justify-content-aroun">
        <div className="row">
          <div className="col-5">
            <img className="img-fluid" src={IMG}></img>
          </div>
          <div className="col-7">
            <BoxLogin />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Login;
