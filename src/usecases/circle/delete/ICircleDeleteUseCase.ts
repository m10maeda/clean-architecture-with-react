import { IUseCase } from '../../shared';
import CircleDeleteUseCaseRequest from './CircleDeleteUseCaseRequest';
import CircleDeleteUseCaseResponse from './CircleDeleteUseCaseResponse';

export interface ICircleDeleteUseCase
  extends IUseCase<CircleDeleteUseCaseRequest, CircleDeleteUseCaseResponse> {}
