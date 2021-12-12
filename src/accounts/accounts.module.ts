import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountStorageService } from './account-storage/account-storage.service';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService, AccountStorageService]
})
export class AccountsModule {}
