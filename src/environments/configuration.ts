export interface IConfiguration {
  environment: string;
  legacyUrl: string;
}

// Extract the IConfiguration interface from the global
// window variable 'dynamic_configuration'.
export const config: IConfiguration = window['dynamic_configuration'];
