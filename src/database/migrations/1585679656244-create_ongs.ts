import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOngs1585679656244 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'ongs',
        columns: [
          {
            name: 'id',
            type: 'string',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'string',
            isNullable: false
          },
          {
            name: 'email',
            type: 'string',
            isNullable: false
          },
          {
            name: 'whatsapp',
            type: 'string',
            isNullable: false
          },
          {
            name: 'city',
            type: 'string',
            isNullable: false
          },
          {
            name: 'uf',
            type: 'string',
            isNullable: false,
            length: '2'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('ongs');
  }
}
