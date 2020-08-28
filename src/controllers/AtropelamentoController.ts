import { Especie } from './../models/Especie';
import AtropelamentoModel, { Atropelamento } from '../models/Atropelamento';

export default class AtropelamentoController {

    async salvarTodos(atropelamentos: Atropelamento[]) {
        const atropelamentosSalvos = await AtropelamentoModel.create(atropelamentos);
        return atropelamentosSalvos;
    }

    async recuperarTodos() {
        const atropelamentos =
            await AtropelamentoModel
                .find({}, { __v: 0 })
                .populate('especie', 'nomeCientifico nomePopular');
        return atropelamentos;
    }

    async recuperarPorEspecie(idEspecie: string) {
        const atropelamentosEspecie =
            await AtropelamentoModel
                .find({ especie: idEspecie })
                .populate('especie');
        return atropelamentosEspecie;
    }

    async limpar() {
        await AtropelamentoModel.remove({});
    }

}