import React from 'react';
import { Container, Input, ErrorMessage, Label } from './styles';

import { Control, Controller, FieldError } from 'react-hook-form';

import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
  label?: string;
  name: string;
  control: Control<any>;
  error?: FieldError;
}

export function ControlledInput({
  label,
  name,
  control,
  error,
  ...rest
}: Props) {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            {error && <ErrorMessage> {error.message} </ErrorMessage>}

            {label && <Label>{label}</Label>}
            
            <Input
              onChangeText={onChange}
              value={value}
              {...rest}
            />
          </>
        )}
      />
    </Container>
  );
}