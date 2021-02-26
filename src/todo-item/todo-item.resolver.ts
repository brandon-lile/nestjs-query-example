import { Resolver } from '@nestjs/graphql';
import { CRUDResolver } from '@nestjs-query/query-graphql';

import { TodoItemDTO } from './todo-item.dto';
import { TodoItemService } from './todo-item.service';

@Resolver()
export class TodoItemResolver extends CRUDResolver(TodoItemDTO, {
  create: { disabled: true },
  read: { defaultResultSize: 25 },
  update: { disabled: true },
  delete: { disabled: true },
}) {
  constructor(readonly todoItemService: TodoItemService) {
    super(todoItemService);
  }

  // Other queries defined here using @Query
}
