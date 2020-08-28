import { Especie } from './models/Especie';
import { Atropelamento } from './models/Atropelamento';
import EspecieController from './controllers/EspecieController';
import AtropelamentoController from './controllers/AtropelamentoController';

export const cadastrarAtropelamentos = async () => {
    try {
        console.log('Vai cadastrar!');
        const especieCtrl = new EspecieController();
        const atropelamentoCtrl = new AtropelamentoController();

        await atropelamentoCtrl.limpar();
        await especieCtrl.limpar();


        const especies: Especie[] = [
            new Especie('Gambá-de-orelha-branca', 'Didelphis albiventris'),
            new Especie('Gambá-de-orelha-preta', 'Didelphis aurita'),
            new Especie('Tatu-de-rabo-mole-comum', 'Cabassous unicinctus'),
            new Especie('Tatu-galinha', 'Dasypus novemcinctus'),
            new Especie('Tatu-peba', 'Euphractus sexcinctus'),
            new Especie('Tamanduá-bandeira', 'Myrmecophaga tridactyla'),
            new Especie('Tamanduá-mirim', 'Tamandua tetradactyla'),
            new Especie('Cachorro-do-mato', 'Cerdocyon thous'),
            new Especie('Lobo-guará', 'Chrysocyon brachyurus'),
            new Especie('Irara', 'Eira barbara'),
            new Especie('Furão-grande', 'Galictis vittata'),
            new Especie('Jaguatirica', 'Leopardus pardalis'),
            new Especie('Quati-de-cauda-anelada', 'Nasua nasua'),
            new Especie('Mão-pelada', 'Procyon cancrivorus'),
            new Especie('Onça-parda', 'Puma concolor'),
            new Especie('Jaguarundi', 'Puma yagouaroundi'),
            new Especie('Anta', 'Tapirus terrestris'),
            new Especie('Preá', 'Cavia aperea'),
            new Especie('Paca', 'Cuniculus paca'),
            new Especie('Capivara', 'Hydrochaerus hydrochaeris'),
        ];


        const especiesCadastradas = await especieCtrl.salvarTodas(especies);

        const atropelamentos: Atropelamento[] = [
            new Atropelamento(6, 1, 5, 2, especiesCadastradas[0]._id),
            new Atropelamento(1, 0, 0, 1, especiesCadastradas[1]._id),
            new Atropelamento(1, 0, 0, 1, especiesCadastradas[2]._id),
            new Atropelamento(16, 4, 17, 3, especiesCadastradas[3]._id),
            new Atropelamento(34, 18, 42, 10, especiesCadastradas[4]._id),
            new Atropelamento(24, 12, 22, 14, especiesCadastradas[5]._id),
            new Atropelamento(13, 6, 12, 7, especiesCadastradas[6]._id),
            new Atropelamento(42, 29, 40, 31, especiesCadastradas[7]._id),
            new Atropelamento(2, 1, 1, 2, especiesCadastradas[8]._id),
            new Atropelamento(2, 0, 1, 1, especiesCadastradas[9]._id),
            new Atropelamento(1, 0, 0, 1, especiesCadastradas[10]._id),
            new Atropelamento(1, 0, 1, 0, especiesCadastradas[11]._id),
            new Atropelamento(2, 0, 1, 1, especiesCadastradas[12]._id),
            new Atropelamento(6, 1, 2, 5, especiesCadastradas[13]._id),
            new Atropelamento(1, 1, 1, 1, especiesCadastradas[14]._id),
            new Atropelamento(2, 0, 2, 0, especiesCadastradas[15]._id),
            new Atropelamento(1, 0, 0, 1, especiesCadastradas[16]._id),
            new Atropelamento(1, 0, 1, 0, especiesCadastradas[17]._id),
            new Atropelamento(1, 0, 0, 1, especiesCadastradas[18]._id),
            new Atropelamento(0, 1, 1, 0, especiesCadastradas[19]._id)
        ];

        await atropelamentoCtrl.salvarTodos(atropelamentos);
        console.log('Populado');
    } catch (erro) {
        console.log(erro);
    }
};

