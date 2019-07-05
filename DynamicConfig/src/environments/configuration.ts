export interface IConfiguration {
  environment: string;
  legacyUrl: string;
}

export function getConfiguration(): IConfiguration {
  // Extract the IConfiguration interface from the global
  // window variable 'dynamic_configuration'.
  return window['dynamic_configuration'];
}
