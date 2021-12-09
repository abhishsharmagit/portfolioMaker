import { MigrationInterface, QueryRunner } from 'typeorm';

export class modifyPortfolio1638524382642 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "portfolio_entity" ADD COLUMN IF NOT EXISTS "repoName" character varying NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "portfolio_entity" DROP COLUMN IF EXISTS "repoName"`,
    );
  }
}
