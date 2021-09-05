import { IUseCase } from '../../shared';
import UserRegisterUseCaseRequest from './UserRegisterUseCaseRequest';
import UserRegisterUseCaseResponse from './UserRegisterUseCaseResponse';

export interface IUserRegisterUseCase
  extends IUseCase<UserRegisterUseCaseRequest, UserRegisterUseCaseResponse> {}
