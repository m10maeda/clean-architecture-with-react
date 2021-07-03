import { UseCaseResponse } from '../../shared';

export default class CircleCreateUseCaseResponse extends UseCaseResponse {
  public readonly createdCiecleId: string;

  public constructor(createdCircleId: string) {
    super();

    this.createdCiecleId = createdCircleId;
  }
}
