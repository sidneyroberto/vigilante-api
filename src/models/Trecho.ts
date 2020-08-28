import { prop, getModelForClass } from '@typegoose/typegoose';

export class Trecho  {

    @prop({required: true})
    public cidadeA: string;

    @prop({required: true})
    public cidadeB: string;

    constructor(cidadeA: string, cidadeB: string) {
        this.cidadeA = cidadeA;
        this.cidadeB = cidadeB;
    }
}

export default getModelForClass(Trecho);

