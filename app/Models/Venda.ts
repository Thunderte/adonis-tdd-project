import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Venda extends BaseModel {
  static table = 'vendas';

  @column({ isPrimary: true })
  public id: number

  @column()
  declare valor: number

  @column()
  declare produto_id: number

  @column()
  declare cliente_id: number

  @column()
  declare vendedor_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
