import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./provider/Authprovider";

const Register = () => {
    const handleregister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        const {createUser} = useContext(AuthContext)
        createUser(email, password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error =>{
          console.log('ERROR', error.massage)
        })
    }
   
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl text-center font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate et in. Quaerat fugiat ut assumenda excepturi exercitationem
             
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleregister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='email' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
               
                
              </div>
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
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
          <p className='ml-4 mb-4'> allrady have an account? please <Link to="/login">Login.</Link></p>
        </div>
      </div>
    );
};

export default Register;