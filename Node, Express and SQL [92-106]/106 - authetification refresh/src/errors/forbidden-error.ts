class ForbiddenError extends Error {
  constructor(message?: string) {
    super(message ?? 'Insufficient privileges');
  }
}

export default ForbiddenError;
