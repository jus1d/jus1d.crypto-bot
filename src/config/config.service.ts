import { config, DotenvParseOutput } from "dotenv";
import { IConfigService } from "./config.interface";

export class ConfigService implements IConfigService {

    private config: DotenvParseOutput;

    constructor() {
        const { error, parsed } = config();
        if (error) {
            throw new Error(".env file didn't found");
        }
        if (!parsed) {
            throw new Error(".env file is empty");
        }
        this.config = parsed;
    }

    get(key: string): string {
        const res = this.config[key];
        if (!res) {
            throw new Error("Nonexistent value");
        }
        return res;
    }
}