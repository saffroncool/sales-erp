import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.enableCors({ origin: 'http://localhost:3000', credentials: true })
  app.use(helmet())
  app.use(cookieParser())
  app.use(compression())
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))
  const port = process.env.API_PORT ? Number(process.env.API_PORT) : 4000
  await app.listen(port)
  console.log(`API running on http://localhost:${port}/api`)
}

bootstrap()
