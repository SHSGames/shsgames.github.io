// Type alias for any API property.
export type APIResponseProperty = Record<string, APIResponseProperty> | boolean | string | number | null | ArrayLike;

// Type alias for any API response.
export type APIResponse = Record<string, APIResponseProperty>;
