import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { CardModule } from "../card/card.module";

@Module({
    imports: [ConfigModule.forRoot(), CardModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
