import EspecieModel, { Especie } from '../models/Especie';

export default class EspecieController {

    async salvarTodas(especies: Especie[]) {
        const especiesSalvas = await EspecieModel.create(especies);
        return especiesSalvas;
    }

    async recuperarTodas() {
        const especies =
            await EspecieModel
                .find({}, { __v: 0 })
                .sort({ nomePopular: 1 });

        return especies;
    }

    async limpar() {
        await EspecieModel.remove({});
    }
}

