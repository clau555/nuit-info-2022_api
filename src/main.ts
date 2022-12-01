import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { ConfigModule } from "@nestjs/config";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix("api");

    ConfigModule.forRoot({
        ignoreEnvFile: true,
    });

    await app.listen(process.env.N2I_API_PORT);
}

bootstrap().then();
