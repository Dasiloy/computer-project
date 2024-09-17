import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  async supplyPower(watts: number) {
    console.log(`Spullying power of ${watts} watts`);
  }
}
