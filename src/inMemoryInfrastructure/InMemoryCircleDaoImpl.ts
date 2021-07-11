import { Circle, CircleId, CircleName, Members } from '../domain/models/circle';
import { UserId } from '../domain/models/user';
import { ICircleDao } from '../gateway/dao';

type CircleSchema = {
  readonly id: string;
  name: string;
  ownerId: string;
  memberIds: string[];
};

export default class InMemoryCircleDaoImpl implements ICircleDao {
  private readonly circles: Map<CircleSchema['id'], CircleSchema>;

  public async find(
    predicate: (circle: Circle) => boolean,
  ): Promise<Circle | undefined> {
    return new Promise((resolve) => {
      const schema = Array.from(this.circles.values()).find((circle) =>
        predicate(this.convertFrom(circle)),
      );

      if (schema === undefined) {
        return resolve(undefined);
      }

      const circle = this.convertFrom(schema);

      return resolve(circle);
    });
  }

  public findAll(
    predicate: (circle: Circle) => boolean,
  ): Promise<Iterable<Circle>> {
    return new Promise((resolve) => {
      const schemas = Array.from(this.circles.values()).filter((circle) =>
        predicate(this.convertFrom(circle)),
      );

      const circles = schemas.map((schema) => this.convertFrom(schema));

      return resolve(circles);
    });
  }

  public get(id: CircleId): Promise<Circle | undefined> {
    return new Promise((resolve, reject) => {
      const schema = this.circles.get(id.toString());

      if (schema === undefined) {
        return reject();
      }

      const circle = this.convertFrom(schema);

      return resolve(circle);
    });
  }

  public getAll(): Promise<Iterable<Circle>> {
    return new Promise((resolve) => {
      const circles = Array.from(this.circles.values()).map((circle) =>
        this.convertFrom(circle),
      );

      return resolve(circles);
    });
  }

  public save(circle: Circle): Promise<void> {
    return new Promise((resolve) => {
      const schema = this.convertFrom(circle);

      this.circles.set(schema.id, schema);

      return resolve();
    });
  }

  public async delete(circle: Circle): Promise<void> {
    return new Promise((resolve) => {
      const schema = this.convertFrom(circle);

      this.circles.delete(schema.id);

      return resolve();
    });
  }

  private convertFrom(circle: CircleSchema): Circle;
  private convertFrom(circle: Circle): CircleSchema;
  // eslint-disable-next-line class-methods-use-this
  private convertFrom(circle: Circle | CircleSchema): CircleSchema | Circle {
    if (circle instanceof Circle) {
      return {
        id: circle.id.toString(),
        name: circle.name.toString(),
        ownerId: circle.owner.toString(),
        memberIds: Array.from(circle.members).map((member) =>
          member.toString(),
        ),
      };
    }

    return new Circle(
      new CircleId(circle.id),
      new CircleName(circle.name),
      new UserId(circle.ownerId),
      new Members(
        Array.from(circle.memberIds).map((memberId) => new UserId(memberId)),
      ),
    );
  }

  public constructor(circles: Iterable<CircleSchema>) {
    this.circles = new Map(
      Array.from(circles).map((circle) => [circle.id, circle]),
    );
  }
}
