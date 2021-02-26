import { Module } from '@nestjs/common';
import { TodoItemResolver } from './todo-item.resolver';
import { TodoItemService } from './todo-item.service';

@Module({
  providers: [TodoItemService, TodoItemResolver],
})
export class TodoItemModule {}
