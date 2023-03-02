type RecursiveStringObj = {
  [Key: string]: string | RecursiveStringObj
};

type ErrorResponse = {
  error: string,
  errors?: string[] | RecursiveStringObj
};
