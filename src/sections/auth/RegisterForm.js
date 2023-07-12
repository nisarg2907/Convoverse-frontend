import { yupResolver } from '@hookform/resolvers/yup';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import FormProvider, { RHFTextField } from "../../components/hook-form";
import { Alert, Button, IconButton, InputAdornment, Stack } from '@mui/material';
import { Eye, EyeSlash } from 'phosphor-react';


const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string().required("first name is required"),
        lastName: Yup.string().required("last name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email must be a valid email address"),
      password: Yup.string().required("Password is required"),
    });
  
    const defaultValues = {
        firstName: 'mark',
        lastName: 'zuckerberg',
      email: "demo@convoverse.com",
      password: "demo1234",
    };
  
    const methods = useForm({
      resolver: yupResolver(RegisterSchema),
      defaultValues,
    });
  
    const {
      reset,
      setError,
      handleSubmit,
      formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;
  
    const onSubmit = async (data) => {
      try {
        // submit data to backend
      } catch (error) {
        console.log(error);
        reset();
        setError("aftersubmit", {
          ...error,
          message: error.message,
        });
      }
    };
  return (
    
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
       <Stack spacing={3} mb={4}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>

        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
         <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >
        Create Account
      </Button>
      </Stack>
    </FormProvider>
  )
}

export default RegisterForm
