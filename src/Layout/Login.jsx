import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';

const Login = () => {
   

   const {singinUser} = useContext(AuthContext)
   singinUser(email, password)
   .then(result =>{
    console.log(result.massage)
   })
.catch(error =>{
  console.log('ERROR', error.massage)
})
    const handlelogin =()=>{
        e.preventDefault()
      const email = e.target.name.value;
      const password = e.target.password.value;
      console.log(email, password)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl text-center font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate et in. Quaerat fugiat ut assumenda excepturi exercitationem
             
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
          <p className='ml-4 mb-4'> new to this website please <Link to="/register">Register</Link></p>
        </div>
      </div>
    );
};

export default Login;