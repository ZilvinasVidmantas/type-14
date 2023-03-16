import jwt from 'jsonwebtoken';
import config from 'config';

type TokenData = {
  email: string,
  id: number,
};

const create = (data: TokenData) => jwt.sign(data, config.token.secret, {
  expiresIn: config.token.expiration,
});

const decode = (token: string) => {
  const decodedData = jwt.decode(token);

  if (decodedData === null) return null;

  return decodedData as TokenData;
};

const JwtTokenService = {
  create,
  decode,
};

export default JwtTokenService;
