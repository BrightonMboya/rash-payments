---
sidebar_position: 3
---

This endpoint allows you to add a new address for an existing customer. This is useful for managing multiple addresses associated with a customer, such as billing and shipping addresses.

#### Endpoint

```
POST https:/api/v1/customers/{customer_id}/addresses
```

#### Path Parameters

- `customer_id` (string): The unique identifier of the customer for whom the address is being created. This ID is typically prefixed with `cus_`.

#### Request Body

The request body should be a JSON object containing the following fields. Only the fields provided will be used to create the new address; all other fields will default to their initial values.

#### Required Fields

- `region` (string): State, county, or region of the address.
- `city` (string): The city of the address. This field is required.
- `country` (string): The country of the address, represented as a two-letter ISO 3166-1 alpha-2 country code. This field is required.

#### Optional Fields

- `description` (string or null): A descriptive label for the address (e.g., "Home", "Office"). This field is optional.
- `custom_data` (object or null): A structured key-value data object containing additional custom information about the address.

#### Example Request

```json
{
  "region": "California",
  "city": "San Francisco",
  "country": "US",
  "description": "Home Address",
  "custom_data": {
    "landmark": "Near Golden Gate Park"
  }
}
```

#### Response

If the address is successfully created, the API will return a JSON object representing the newly created address.

#### Example Response

```json
{
  "id": "add_01h1x0z5y4c1v2f5k6p3j9n8m7",
  "customer_id": "cus_01h1w8r7s2v4l5m6n7p8j9k0q2",
  "description": "Home Address",
  "region": "California",
  "city": "San Francisco",
  "country": "US",
  "custom_data": {
    "landmark": "Near Golden Gate Park"
  },
  "created_at": "2024-08-01T10:15:30.000Z",
  "updated_at": "2024-08-29T14:45:22.000Z"
}
```

#### Fields

- `id` (string): A unique identifier for the address, prefixed with `add_`.
- `customer_id` (string): The unique identifier of the customer to whom this address belongs.
- `description` (string or null): A descriptive label for the address.
- `region` (string): The state, county, or region of the address.
- `city` (string): The city of the address.
- `country` (string): The country of the address, represented as a two-letter ISO 3166-1 alpha-2 country code.
- `custom_data` (object or null): Any additional custom information related to the address.
- `created_at` (string): The date and time when the address record was created, in ISO 8601 format.
- `updated_at` (string): The date and time when the address record was last updated, in ISO 8601 format.

#### Usage

This endpoint is particularly useful for managing and organizing customer addresses, whether for shipping, billing, or other purposes. It allows for the efficient addition of new addresses associated with a customer, facilitating better service and accurate delivery.
