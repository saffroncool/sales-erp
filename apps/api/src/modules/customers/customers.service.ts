import { Injectable } from '@nestjs/common'
import { CreateCustomerDto } from './dto/create-customer.dto'

@Injectable()
export class CustomersService {
  private items: import('./customers.types').Customer[] = []

  findAll(): import('./customers.types').Customer[] {
    return this.items
  }

  create(dto: CreateCustomerDto): import('./customers.types').Customer {
    const customer: import('./customers.types').Customer = {
      id: String(this.items.length + 1),
      name: dto.name,
      email: dto.email,
      phone: dto.phone
    }
    this.items.push(customer)
    return customer
  }
}
