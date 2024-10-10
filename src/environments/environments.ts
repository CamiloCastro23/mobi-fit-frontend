export const environment = {
  production: false,
  clientId: '7s6lqebt95v3tusphhogg6oajl',
  redirectUri: 'http://localhost:4200/',
  tokenUrl: 'https://auth.mobi-ai.com/oauth2/token',
  jwksUrl: `https://cognito-idp.us-east-1.amazonaws.com/us-east-1_Dynzy3ta6/.well-known/jwks.json`,
  authUrl: 'https://auth.mobi-ai.com/oauth2/authorize?client_id=7s6lqebt95v3tusphhogg6oajl&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2F',
  logoutUrl: `https://auth.mobi-ai.com/logout?client_id=7s6lqebt95v3tusphhogg6oajl&redirect_uri=${encodeURIComponent('http://localhost:4200/')}&response_type=code`,
  getUsersUrl: 'http://localhost:3000',
};
