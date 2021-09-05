import { IUseCase } from '../../shared';
import CircleUpdateUseCaseRequest from './CircleUpdateUseCaseRequest';
import CircleUpdateUseCaseResponse from './CircleUpdateUseCaseResponse';

export interface ICircleUpdateUseCase
  extends IUseCase<CircleUpdateUseCaseRequest, CircleUpdateUseCaseResponse> {}
