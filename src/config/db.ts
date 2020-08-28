import {
    connect,
    disconnect,
    connection
} from 'mongoose';

import { cadastrarAtropelamentos } from '../populate';

const dbURI = 'mongodb://mongo/vigilante-db';

export const conectar = async () => await connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export const desconectar = async () => await disconnect();

export const conectarServidorNoBD = () => {
    conectar();

    connection.on('connected', async () => {
        console.log('Mongoose! Conectado em ' + dbURI);
        cadastrarAtropelamentos();
    });

    connection.on('disconnected', () => console.log('Mongoose! Desconectado de ' + dbURI));

    connection.on('error', (erro) => console.log('Mongoose! Erro na conexão: ' + erro));

    process.on('SIGINT', () => {
        connection.close(() => {
            console.log('Mongoose! Desconectado pelo término da aplicação');
            process.exit(0);
        });
    });
}