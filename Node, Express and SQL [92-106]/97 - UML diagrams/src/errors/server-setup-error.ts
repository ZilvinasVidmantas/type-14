class ServerSetupError extends Error {
  constructor(message?: string) {
    super(message ?? 'Server setup error');
  }
}

export default ServerSetupError;
