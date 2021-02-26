import { Test, TestingModule } from '@nestjs/testing';

import { TodoItemResolver } from './todo-item.resolver';
import { TodoItemService } from './todo-item.service';

const mockedTodoItem = {
  id: 3,
  title: 'Mocked Todo Item',
  completed: true,
  created: new Date(2000, 12, 1, 0, 0, 0, 0),
  updated: new Date(2000, 12, 1, 0, 0, 0, 0),
};

describe('CashPoolSettingsResolver', () => {
  let resolver: TodoItemResolver;
  let queryMock: jest.Mock;

  beforeEach(async () => {
    queryMock = jest.fn(async () => {
      return Promise.resolve([mockedTodoItem]);
    });

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'TodoItemService',
          useValue: {
            query: queryMock,
          },
        },
        TodoItemResolver,
      ],
    }).compile();

    resolver = module.get<TodoItemResolver>(TodoItemResolver);
  });

  it('should returned the mock value defined for the service', async () => {
    expect(
      (await resolver.queryMany({ filter: { id: { eq: 3 } } })).edges,
    ).toStrictEqual(mockedTodoItem);
  });
});

describe('CashPoolSettingsResolver not mocked', () => {
  let resolver: TodoItemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoItemService, TodoItemResolver],
    }).compile();

    resolver = module.get<TodoItemResolver>(TodoItemResolver);
  });

  it('should returned the unmocked value defined by the service', async () => {
    expect(
      (await resolver.queryMany({ filter: { id: { eq: 3 } } })).edges,
    ).toStrictEqual([
      {
        id: 1,
        title: 'Test Title',
        completed: false,
        created: new Date(),
        updated: new Date(),
      },
    ]);
  });
});
