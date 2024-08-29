---
sidebar_position: 4
---


This endpoint allows you to retrieve detailed information about a specific customer. This endpoint is useful for viewing customer details, managing accounts, and performing customer-related operations.

#### Endpoint

```http
GET /api/v1/customers/{customer_id}
```

#### Path Parameters

- `customer_id` (string): The unique identifier of the customer you want to retrieve. This ID is typically prefixed with `cus_`.

#### Example Request

```http
GET /api/v1/customers/cus_01h3vjs3b16yc3f9q8q9pfrb80
```

#### Response

The response is a JSON object containing detailed information about the specified customer.

#### Response Object

- `id` (string): The unique identifier for the customer. This ID is typically prefixed with `cus_`.
- `name` (string): The full name of the customer. This can be either the individual's name or the name of the organization.
- `email` (string): The email address of the customer. This is used for communication and sending receipts or notifications.
- `phone` (string or null): The phone number of the customer. This is optional and used for contact purposes.
- `address` (object or null): The billing address of the customer. This object can be null if the address is not provided.
  - `city` (string): The city of the address.
  - `country` (string): The country of the address, represented as a two-letter ISO 3166-1 alpha-2 country code.
- `payment_method` (string or null): The payment method associated with the customer, such as a credit card, mobile payment, or bank account. This is optional and can be null if not set.
- `created_at` (string): The date and time when the customer record was created, in ISO 8601 format.
- `updated_at` (string): The date and time when the customer record was last updated, in ISO 8601 format.
- `status` (string): The status of the customer's account. Possible values include:
  - `active`: The customer's account is active and in good standing.
  - `inactive`: The customer's account is inactive and may require reactivation.
  - `suspended`: The customer's account is suspended due to issues such as payment problems.
- `custom_data` (object or null): A structured key-value data that contains additional custom information about the customer.

#### Example Response

```json
{
  "id": "cus_01h3vjs3b16yc3f9q8q9pfrb80",
  "name": "Brighton Mboya",
  "email": "brighton@jani.com",
  "phone": "+2557881234567",
  "address": {
    "city": "Dar es Salaam",
    "country": "Tanzania"
  },
  "payment_method": "card_01h3vjs3b16yc3f9q8q9pfrb79",
  "created_at": "2024-09-01T15:00:00.000Z",
  "updated_at": "2024-09-01T15:00:00.000Z",
  "status": "active",
  "custom_data": {
    "loyalty_program": "silver"
  }
}
```

#### Error Responses

- `404 Not Found`: Returned if the customer with the specified `customer_id` does not exist.