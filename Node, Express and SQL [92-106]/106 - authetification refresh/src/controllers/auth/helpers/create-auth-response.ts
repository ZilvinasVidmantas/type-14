import JwtTokenService from 'services/jwt-token-service';
import { AuthResponse } from '../types';

const createAuthResponse = ({ password, ...userViewModel }: UserEntity): AuthResponse => ({
  user: userViewModel,
  token: JwtTokenService.create({
    email: userViewModel.email,
    id: userViewModel.id,
  }),
});

export default createAuthResponse;
