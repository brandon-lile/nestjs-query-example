import { Injectable } from '@nestjs/common';
import { applyQuery, NoOpQueryService, Query } from '@nestjs-query/core';

import { TodoItemDTO } from './todo-item.dto';

@Injectable()
export class TodoItemService extends NoOpQueryService<TodoItemDTO> {
  private todoItems: TodoItemDTO[] = [];

  constructor() {
    super();

    this.todoItems = [
      {
        id: 1,
        title: 'Test Title',
        completed: false,
        created: new Date(),
        updated: new Date(),
      },
    ];
  }

  // In this example we return a promise that resolves, but in real life we are
  // just calling another API and then returning it' response
  query(query: Query<TodoItemDTO>): Promise<TodoItemDTO[]> {
    return Promise.resolve(applyQuery(this.todoItems, query));
  }

  // Other functions that are overwritten here
}
