import { IUseCase } from '../../shared';
import UserUpdateUseCaseRequest from './UserUpdateUseCaseRequest';
import UserUpdateUseCaseResponse from './UserUpdateUseCaseResponse';

export interface IUserUpdateUseCase
  extends IUseCase<UserUpdateUseCaseRequest, UserUpdateUseCaseResponse> {}
