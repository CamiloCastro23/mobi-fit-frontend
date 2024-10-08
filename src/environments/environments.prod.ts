export const environment = {
  production: true,
  clientId: 'PRODUCTION_CLIENT_ID',
  redirectUri: 'https://your-production-url.com/',
  tokenUrl: 'https://auth.mobi-ai.com/oauth2/token',
  jwksUrl: `https://cognito-idp.us-east-1.amazonaws.com/us-east-1_Dynzy3ta6/.well-known/jwks.json`,
  authUrl: 'https://auth.mobi-ai.com/oauth2/authorize?client_id=PRODUCTION_CLIENT_ID&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fyour-production-url.com%2F'
};
