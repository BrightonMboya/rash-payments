---
sidebar_position: 2
---

This endpoint allows you to retrieve all the addresses associated with a specific customer. This is useful for displaying a customer's saved addresses for billing, shipping, or other purposes.

#### Endpoint

```
GET https://api/v1/customers/{customer_id}/addresses
```

#### Path Parameters

- `customer_id` (string): The unique identifier of the customer whose addresses you want to retrieve. This ID is typically prefixed with `cus_`.

#### Response

The response is a JSON object containing a list of address objects associated with the specified customer.

##### Example Response

```json
{
  "customer_id": "cus_01h1w8r7s2v4l5m6n7p8j9k0q2",
  "addresses": [
    {
      "id": "add_01h1x0z5y4c1v2f5k6p3j9n8m7",
      "description": "Home Address",
      "region": "Kigali",
      "city": "Kigali",
      "country": "RW",
      "custom_data": {
        "landmark": "Office at Kigali Heights"
      },
      "created_at": "2024-08-01T10:15:30.000Z",
      "updated_at": "2024-08-29T14:45:22.000Z"
    },
    {
      "id": "add_01h2y1z6b5d7e8f9g0h1i2j3k4",
      "description": "Office Address",
      "region": "New York",
      "city": "New York City",
      "country": "US",
      "custom_data": {
        "floor": "15th"
      },
      "created_at": "2024-07-15T08:20:10.000Z",
      "updated_at": "2024-08-20T11:30:45.000Z"
    }
  ],
  "limit": 2,
  "offset": 0
}
```

#### Fields

- `customer_id` (string): The unique identifier of the customer.
- `addresses` (array of objects): A list of address objects associated with the customer.
  - `id` (string): A unique identifier for the address, prefixed with `add_`.
  - `description` (string or null): A description of the address.
  - `region` (string): The state, county, or region of the address.
  - `city` (string): The city of the address.
  - `country` (string): The country of the address, represented as a two-letter ISO 3166-1 alpha-2 country code.
  - `custom_data` (object or null): Any additional custom information related to the address.
  - `created_at` (string): The date and time when the address record was created, in ISO 8601 format.
  - `updated_at` (string): The date and time when the address record was last updated, in ISO 8601 format.
- `limit` (integer): The maximum number of addresses returned in the response.
- `offset` (integer): The number of addresses skipped before starting to return results.

#### Usage

This endpoint is particularly useful for displaying a customer's saved billing or shipping addresses on a profile page, or during the checkout process. By utilizing pagination through the `limit` and `offset` parameters, you can manage large lists of addresses efficiently.
