import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateIncidents1585680200778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'incidents',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true
          },
          {
            name: 'title',
            type: 'string',
            isNullable: false
          },
          {
            name: 'description',
            type: 'string',
            isNullable: false
          },
          {
            name: 'value',
            type: 'float',
            isNullable: false
          },
          {
            name: 'ong_id',
            type: 'string',
            isNullable: false
          }
        ]
      })
    );

    await queryRunner.createForeignKey(
      'incidents',
      new TableForeignKey({
        columnNames: ['ong_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'ongs',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('incidents');
  }
}
