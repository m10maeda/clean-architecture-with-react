import { IUseCase } from '../../shared';
import CircleCreateUseCaseRequest from './CircleCreateUseCaseRequest';
import CircleCreateUseCaseResponse from './CircleCreateUseCaseResponse';

export interface ICircleCreateUseCase
  extends IUseCase<CircleCreateUseCaseRequest, CircleCreateUseCaseResponse> {}
