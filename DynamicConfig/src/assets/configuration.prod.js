// Replace all environment variables with placeholders
// that will be populated by the deployment.
dynamic_configuration = {
  environment: '#{AppEnvironment}#',
  legacyUrl: '#{AppLegacyUrl}#'
}
