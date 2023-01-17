export abstract class Model {
  id: string;
  raw: any;

  constructor(id: string, raw: any) {
    this.id = id;
    this.raw = raw;
  }

  getId() {
    return this.id;
  }
}

export default Model;
