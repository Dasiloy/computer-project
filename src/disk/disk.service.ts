import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private readonly powerService: PowerService) {}

  async saveData(watts: number, data: any) {
    // get the required power
    await this.powerService.supplyPower(watts);

    // save data to disk
    console.log(`Saving data of ${data} to disk`);
  }

  async getData(watts: number, data: any) {
    // get the required power
    await this.powerService.supplyPower(watts);

    // save data to disk
    console.log(`Getting data of ${data} from disk`);
  }
}
