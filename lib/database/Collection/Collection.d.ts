import Model from '../Model';
export declare class Collection<M extends Model> {
    models: Array<M>;
    constructor(models?: Array<M>);
    merge(collection: Collection<M>, key?: string): Collection<M>;
    exists(id: string, key?: string): boolean;
    getAllModels(): M[];
    isEmpty(): boolean;
}
export default Collection;
