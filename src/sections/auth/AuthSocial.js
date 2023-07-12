import { Divider, IconButton, Stack } from '@mui/material';
import { GithubLogo, GoogleLogo, TwitterLogo } from 'phosphor-react';
import React from 'react';

const AuthSocial = () => {
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&:before, &::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton style={{ color: "#DF3E30" }} aria-label="Google">
          <GoogleLogo />
        </IconButton>
        <IconButton style={{ color: "inherit" }} aria-label="GitHub">
          <GithubLogo />
        </IconButton>
        <IconButton style={{ color: "#1C9CEA" }} aria-label="Twitter">
          <TwitterLogo />
        </IconButton>
      </Stack>
    </div>
  );
};

export default AuthSocial;
