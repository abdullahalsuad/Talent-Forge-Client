import { useState } from "react";
import RegisterForm from "../../components/authentication/RegisterForm";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <RegisterForm
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    </>
  );
};

export default Register;
