import { IUseCase } from '../../shared';
import CircleGetUseCaseRequest from './CircleGetUseCaseRequest';
import CircleGetUseCaseResponse from './CircleGetUseCaseResponse';

export interface ICircleGetUseCase
  extends IUseCase<CircleGetUseCaseRequest, CircleGetUseCaseResponse> {}
