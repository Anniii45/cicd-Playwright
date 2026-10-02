import fs from 'fs';
import path from 'path';

export class ConfigReader {
  private static config: Record<string, unknown> | undefined;

  private static loadConfig(): Record<string, unknown> {
    const configPath = path.resolve(process.cwd(), 'config', 'config.json');
    const data = fs.readFileSync(configPath, 'utf-8');
    this.config = JSON.parse(data) as Record<string, unknown>;
    return this.config;
  }

  static get(key: string): unknown {
    const config = this.config ?? this.loadConfig();
    return config[key];
  }
}
