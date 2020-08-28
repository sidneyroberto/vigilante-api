import { prop, getModelForClass, Ref } from '@typegoose/typegoose';

import { Especie } from './Especie';

export class Atropelamento {

    @prop({ required: true, default: 0 })
    public quantidadeCampoGrandeAquidauana: number;

    @prop({ required: true, default: 0 })
    public quantidadeAquidauanaMiranda: number;

    @prop({ required: true, default: 0 })
    public quantidadeChuvosa: number;

    @prop({ required: true, default: 0 })
    public quantidadeSeca: number;

    @prop({ ref: Especie, unique: true })
    public especie: Ref<Especie>;

    constructor(
        quantidadeCampoGrandeAquidauana: number,
        quantidadeAquidauanaMiranda: number,
        quantidadeChuvosa: number,
        quantidadeSeca: number,
        especie: Ref<Especie>,
    ) {
        this.quantidadeCampoGrandeAquidauana = quantidadeCampoGrandeAquidauana;
        this.quantidadeAquidauanaMiranda = quantidadeAquidauanaMiranda;
        this.quantidadeChuvosa = quantidadeChuvosa;
        this.quantidadeSeca = quantidadeSeca;
        this.especie = especie;
    }
}

export default getModelForClass(Atropelamento);