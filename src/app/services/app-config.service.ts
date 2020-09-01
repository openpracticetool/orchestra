import { Injectable } from '@angular/core';
import { IAppConfig } from 'src/app/models/app-config';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppConfigService {
  static settings: IAppConfig;
  constructor(private http: HttpClient) { }
  load(): Promise<void> {
    const jsonFile = `assets/config/config.${environment.name}.json`;
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: IAppConfig) => {
        AppConfigService.settings = (response as IAppConfig);
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
}
