import { Body, Controller, Get, Post } from '@nestjs/common'
import { CustomersService } from './customers.service'
import { Customer } from './customers.types'
import { CreateCustomerDto } from './dto/create-customer.dto'

@Controller('customers')
export class CustomersController {
  constructor(private readonly svc: CustomersService) {}

  @Get()
  getAll(): Customer[] {
    return this.svc.findAll()
  }

  @Post()
  create(@Body() dto: CreateCustomerDto): Customer {
    return this.svc.create(dto)
  }
}
