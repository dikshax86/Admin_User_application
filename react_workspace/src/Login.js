import { useState } from 'react';

export const Login = () => {
  var [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    var { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // call api here
    console.log(formData.email,formData.password);
    
    setFormData({
      email: '',
      password: ''
    });
  };

  

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h3>SignIn</h3>
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input

            value={formData.email}
            id='email'
            name='email'
            type="email"
            placeholder="Enter your email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password</label>
          <input
            value={formData.password}
            id='password'
            name='password'
            type="password"
            placeholder="Enter password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div>
          <button 
          type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
