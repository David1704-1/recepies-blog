import { Test, TestingModule } from '@nestjs/testing';
import { RecepieResolver } from './recepie.resolver';
import { RecepieService } from './recepie.service';

describe('RecepieResolver', () => {
  let resolver: RecepieResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecepieResolver, RecepieService],
    }).compile();

    resolver = module.get<RecepieResolver>(RecepieResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
