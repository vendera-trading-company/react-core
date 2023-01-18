/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-interface */

import Model from '../Model';

export class Collection<M extends Model> {
  models: Array<M>;

  constructor(models: Array<M> = []) {
    this.models = models;
  }

  merge(collection: Collection<M>, key: string = 'id') {
    var models = this.models;

    collection.getAllModels().map((model) => {
      if (!this.exists(model.raw[key], key)) {
        models.push(model);
      }
    });

    this.models = models;

    return new Collection(this.models);
  }

  exists(id: string, key: string = 'id') {
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
