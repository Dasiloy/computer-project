import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private readonly powerService: PowerService) {}

  async processTask(watts: number, task: any) {
    // get the require power
    await this.powerService.supplyPower(watts);
    // do task
    console.log(` Task of ${task} is being processed`);
  }
}
