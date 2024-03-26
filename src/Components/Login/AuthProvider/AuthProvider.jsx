import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthProvider = ({ children }) => {
  const [state, setCurrentState] = useState(0);
  const navigate = useNavigate();

  // Aquí puedes proporcionar contexto de autenticación o cualquier otra funcionalidad necesaria

  return <div>{children}</div>;
};

export default AuthProvider;
