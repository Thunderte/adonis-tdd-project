import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VendaService from 'App/Services/VendaService';

export default class VendasController {
    async index({}: HttpContextContract) {
        return { message: 'Listagem de vendas' }
    }

    async store({ request }: HttpContextContract) { 
        const data = request.only(['valor', 'produto_id', 'cliente_id', 'vendedor_id']);

        const venda = await VendaService.createVenda(data.valor, data.produto_id, data.cliente_id, data.vendedor_id);

        return venda;
    }
}
