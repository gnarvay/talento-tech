import {useState} from 'react';
import {useAuthContext} from '../context/AuthContext';
import {Navigate, useNavigate} from 'react-router-dom';

export function Login(){
  const [userForm, setUserForm] = useState({name: "", password: ""});
  const {user, login} = useAuthContext();
  const navigate = useNavigate();

  if(user){return <Navigate to="/admin/alta-productos" />}

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserForm({...userForm, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(userForm.name, userForm.password);
    if(success){
      navigate("/admin/alta-productos");
    }else{
      alert("credenciales incorrectas");
      setUserForm({name: "", password: ""});
    }
  }

  return (
    <div className="d-lg-flex half">
      <div className="contents">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <h3>iniciar sesión</h3>
              <p className="mb-4">Talento Tech 2025. Acceso al formulario de alta de Poke Store.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group first">
                  <label>usuario</label>
                  <input type="text" className="form-control" name="name" value={userForm.name} onChange={handleChange} maxLength="5" />
                </div>
                <div className="form-group last my-3">
                  <label>password</label>
                  <input type="password" className="form-control" name="password" value={userForm.password} onChange={handleChange} maxLength="4" />
                </div>
                <button className="btn btn-block btn-primary" type="submit">iniciar sesión</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
