type Props = {
  oidcConfig: any;
  buttonConfig: any;
};
const SignInWithEsignet = () => {
  interface Claims {
    userinfo: {
      given_name: {
        essential: boolean;
      };
      phone_number: {
        essential: boolean;
      };
      email: {
        essential: boolean;
      };
      picture: {
        essential: boolean;
      };
      gender: {
        essential: boolean;
      };
      birthdate: {
        essential: boolean;
      };
      address: {
        essential: boolean;
      };
    };
    id_token: {};
  }

  interface OidcConfig {
    authorizeUri: string;
    redirect_uri: string;
    client_id: string;
    scope: string;
    nonce: string;
    state: string;
    acr_values: string;
    claims: Claims;
    claims_locales: string;
  }

  interface ButtonConfig {
    logoPath: string;
    logoAlt: string;
  }

  function validateOidcConfig(config: OidcConfig): boolean {
    if (
      !config.authorizeUri ||
      !config.redirect_uri ||
      !config.client_id ||
      !config.scope ||
      !config.nonce ||
      !config.state ||
      !config.acr_values ||
      !config.claims ||
      !config.claims_locales
    ) {
      return false;
    }
    return true;
  }

  const oidcConfig: OidcConfig = {
    authorizeUri: "https://esignet.mosip.net/authorize",
    redirect_uri: "https://healthservices.mosip.net",
    client_id: "88Vjt34c5Twz1oJ",
    scope: "openid profile",
    nonce: "ere973eieljznge2311",
    state: "eree2311",
    acr_values:
      "mosip:idp:acr:generated-code mosip:idp:acr:biometrics mosip:idp:acr:static-code",
    claims: {
      userinfo: {
        given_name: {
          essential: true,
        },
        phone_number: {
          essential: false,
        },
        email: {
          essential: true,
        },
        picture: {
          essential: false,
        },
        gender: {
          essential: false,
        },
        birthdate: {
          essential: false,
        },
        address: {
          essential: false,
        },
      },
      id_token: {},
    },
    claims_locales: "en",
  };

  const buttonConfig: ButtonConfig = {
    logoPath: "/images/logo.png",
    logoAlt: "Logo atl text",
  };

  const isOidcConfigValid = validateOidcConfig(oidcConfig);

  if (isOidcConfigValid) {
    // render the button
  } else {
    // render disabled button with error message
  }
};
export default SignInWithEsignet;
