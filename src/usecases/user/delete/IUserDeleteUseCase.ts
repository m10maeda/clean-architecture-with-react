import { IUseCase } from '../../shared';
import UserDeleteUseCaseRequest from './UserDeleteUseCaseRequest';
import UserDeleteUseCaseResponse from './UserDeleteUseCaseResponse';

export interface IUserDeleteUseCase
  extends IUseCase<UserDeleteUseCaseRequest, UserDeleteUseCaseResponse> {}
