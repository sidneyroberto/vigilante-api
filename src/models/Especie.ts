import { prop, getModelForClass } from '@typegoose/typegoose';

export class Especie {

    @prop({ required: true })
    public nomePopular: string;

    @prop({ required: true, unique: true })
    public nomeCientifico: string;

    constructor(nomePopular: string, nomeCientico: string) {
        this.nomePopular = nomePopular;
        this.nomeCientifico = nomeCientico;
    }
}

export default getModelForClass(Especie);

