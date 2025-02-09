// Contains constants for HTTP status codes.
// Used throughout the application to ensure consistency in status code usage.

export const httpStatus = {
  ok: 200,
  created: 201,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  notFound: 404,
  forbidden: 403,
  internalServerError: 500,
} as const;
