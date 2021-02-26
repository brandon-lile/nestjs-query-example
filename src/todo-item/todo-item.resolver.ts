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

  // We define other @Query endpoints here, but we do not overwrite the
  // queryMany function as we just want it to call the `query` function
  // on the service
}
