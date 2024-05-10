import Venda from 'App/Models/Venda';

import Database from '@ioc:Adonis/Lucid/Database'

export default class VendaService {
    // Transaction created
    public static async createVenda(valor: number, produto_id: number, cliente_id: number, vendedor_id: number) {
            const venda = await Venda.create({ valor, produto_id, cliente_id, vendedor_id });

            return venda;
        }

    public static async findVendaRandom() {
        const venda = await Venda.first();

        return venda;
    }

    public static async findVendaById(id: number) {
        const venda = await Venda.find(id);

        if(!venda) return true;

        return false;
    }
}