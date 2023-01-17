import Model from "../Model";

export class Collection<M extends Model> {
  models: Array<M>;

  constructor(models: Array<M> = []) {
    this.models = models;
  }

  merge(collection: Collection<M>, key: string = "id") {
    var models = this.models;

    collection.getAllModels().map((model) => {
      if (!this.exists(model.raw[key], key)) {
        models.push(model);
      }
    });

    this.models = models;

    return new Collection(this.models);
  }

  exists(id: string, key: string = "id") {
    const models = this.getAllModels();

    for (var i = 0; i < models.length; i++) {
      if (models[i].raw[key] == id) {
        return true;
      }
    }

    return false;
  }

  getAllModels() {
    return this.models;
  }

  isEmpty() {
    return this.getAllModels().length == 0;
  }
}

export default Collection;
