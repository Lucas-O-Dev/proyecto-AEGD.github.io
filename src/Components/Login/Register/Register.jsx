import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const navigate = useNavigate();
  const [registrando, setRegistrando] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState("");

  const funcAutentication = async (e) => {
    e.preventDefault();

    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (!isValidEmail(correo)) {
      setEmailError("Por favor ingresa un correo electrónico válido.");
      return;
    }

    if (contraseña.length < 8 || !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(contraseña)) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres y al menos un símbolo especial.");
      return;
    }

    setRegistrando(true);

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, correo, contraseña);
      console.log('Usuario registrado con éxito');
      navigate('/PersonalData');
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setEmailError("Este correo electrónico ya está en uso.");
      } else {
        console.error('Error al registrar usuario:', error);
      }
    } finally {
      setRegistrando(false);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h3>Register</h3>
      <article>
        <form onSubmit={funcAutentication}>
          <input type="text" placeholder="Ingresar Email" id="email" />
          {emailError && <p>{emailError}</p>}
          <input type="password" placeholder="Ingresar Pass" id="password" />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          <button type="submit" disabled={registrando}>Registrarse</button>
        </form>
      </article>
      <section>
        <Link to={'/Login'} >¿Ya tienes una cuenta?</Link>
      </section>
    </div>
  );
};

export default Register;
