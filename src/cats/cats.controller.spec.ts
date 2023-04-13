import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let catsController: CatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catsController = app.get<CatsController>(CatsController);
  });

  describe('Tests on findAll()', () => {
    it('should return "This action returns all cats"', () => {
      expect(catsController.findAll()).toBe('This action returns all cats');
    });
  });

  const name = 'Cato';
  const age = 5;

  describe('Tests on create() async function with DTO', () => {
    it(`should return "Added new cat called ${name} that is ${age} years old"`, async () => {
      const result = await catsController.create({
        name: name,
        age: age,
      });

      expect(result).toBe('Added new cat called Cato that is 5 years old');
    });
  });
});
