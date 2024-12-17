const domain = 'auth.mobi-ai-dev.click';
const localBaseUrl = 'http://localhost:4200';
const encodedRedirectUri = encodeURIComponent(localBaseUrl);
const clientId = '26nv3rckdiln2i6gkpn726na7v';

export const environment = {
  production: false,
  clientId,
  redirectUri: localBaseUrl,
  tokenUrl: `https://${domain}/oauth2/token`,
  jwksUrl: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_Sg4XlNU32/.well-known/jwks.json',

  authUrl: `https://${domain}/login?client_id=${clientId}&response_type=code&scope=email+openid+profile&redirect_uri=${encodedRedirectUri}`,
  logoutUrl: `https://${domain}/logout?client_id=${clientId}&redirect_uri=${encodedRedirectUri}&response_type=code`,

  getUsersUrl: 'http://localhost:3000',
};
