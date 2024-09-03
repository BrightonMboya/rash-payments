---
sidebar_position: 5
---

This endpoint allows you to modify the details of an existing address associated with a customer. This is useful for keeping address information current, such as when a customer moves or changes their contact details.

#### Endpoint

```
PATCH https://api/v1/customers/{customer_id}/addresses/{address_id}
```

#### Path Parameters

- `customer_id` (string): The unique identifier of the customer whose address is being updated. This ID is typically prefixed with `cus_`.
- `address_id` (string): The unique identifier of the address to be updated. This ID is typically prefixed with `add_`.

#### Request Body

The request body should be a JSON object containing the fields to be updated. Only the fields provided will be updated; all other fields will remain unchanged.

#### Fields

- `description` (string or null): A descriptive label for the address (e.g., "Home", "Office"). This field is optional.
- `region` (string): State, county, or region of the address.
- `city` (string): The city of the address. This field is required.
- `country` (string): The country of the address, represented as a two-letter ISO 3166-1 alpha-2 country code. This field is required.
- `custom_data` (object or null): A structured key-value data object containing additional custom information about the address. This field can be null if not used.

#### Example Request

```json
{
  "description": "Updated Home Address",
  "region": "California",
  "city": "San Francisco",
  "country": "US",
  "custom_data": {
    "landmark": "Near Golden Gate Park"
  }
}
```

#### Response

If the address is successfully updated, the API will return a JSON object representing the updated address.

#### Example Response

```json
{
  "id": "add_01h1x0z5y4c1v2f5k6p3j9n8m7",
  "customer_id": "cus_01h1w8r7s2v4l5m6n7p8j9k0q2",
  "description": "Updated Home Address",
  "region": "California",
  "city": "San Francisco",
  "country": "US",
  "custom_data": {
    "landmark": "Near Golden Gate Park"
  },
  "created_at": "2024-08-01T10:15:30.000Z",
  "updated_at": "2024-08-29T15:00:00.000Z"
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

This endpoint allows you to keep address information up-to-date for a customer. It is useful for updating details such as changes in address location or additional custom data that needs to be maintained. Ensuring address accuracy helps in efficient delivery and accurate billing processes.
