import React from 'react';
import {
  Container,
  Form,
  Footer
} from './styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormData = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

/* Validation Form - Start */
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Digite o seu nome"),
  lastName: yup
    .string()
    .required("Digite o seu sobrenome"),
  email: yup
    .string()
    .required("Digite o seu e-mail")
    .email("Digite um e-mail válido"),
  password: yup
    .string()
    .required("Digite a sua senha")
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirme a sua senha")
    .oneOf([yup.ref('password'), null], "As senhas não conferem")
});
/* Validation Form - End */

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  return (
    <Container>
      <Form>

      </Form>

      <Footer>
        
      </Footer>
    </Container>
  );
}