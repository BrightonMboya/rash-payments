---
sidebar_position: 5
---

This endpoint allows you to modify the details of an existing customer. This endpoint is useful for updating customer information, such as contact details, payment methods, or account status.

#### Endpoint

```http
PATCH /api/v1/customers/{customer_id}
```

#### Path Parameters

- `customer_id` (string): The unique identifier of the customer you want to update. This ID is typically prefixed with `cus_`.

#### Request Body

The request body should be a JSON object containing any of the following fields that you wish to update. Only the fields provided in the request will be updated; all other fields will remain unchanged.

#### Updatable Fields

- `name` (string): The full name of the customer. This can be either an individual's name or the name of an organization.
- `email` (string): The email address of the customer. This is used for communication and sending receipts or notifications.
- `phone` (string or null): The phone number of the customer. This is optional and used for contact purposes.
- `address` (object or null): The billing address of the customer. This object can be null if the address is not provided.
  - `city` (string): The city of the address.
  - `country` (string): The country of the address, represented as a two-letter ISO 3166-1 alpha-2 country code.
- `payment_method` (string or null): The payment method associated with the customer, such as a credit card, mobile payment, or bank account. This is optional and can be null if not set.
- `status` (string): The status of the customer's account. Possible values include:
  - `active`: The customer's account is active and in good standing.
  - `inactive`: The customer's account is inactive and may require reactivation.
  - `suspended`: The customer's account is suspended due to issues such as payment problems.
- `custom_data` (object or null): A structured key-value data that contains additional custom information about the customer.

#### Example Request

```json
{
  "name": "Alice Johnson",
  "email": "alice.new@example.com",
  "phone": "+19876543210",
  "address": {
    "city": "San Francisco",
    "country": "US"
  },
  "status": "active",
  "custom_data": {
    "loyalty_program": "gold"
  }
}
```

#### Response

If the customer is successfully updated, the API will return a JSON object representing the updated customer.

#### Example Response

```json
{
  "id": "cus_01h3vjs3b16yc3f9q8q9pfrb80",
  "name": "Alice Johnson",
  "email": "alice.new@example.com",
  "phone": "+19876543210",
  "address": {
    "city": "San Francisco",
    "country": "US"
  },
  "payment_method": "card_01h3vjs3b16yc3f9q8q9pfrb79",
  "created_at": "2024-09-01T15:00:00.000Z",
  "updated_at": "2024-09-02T12:00:00.000Z",
  "status": "active",
  "custom_data": {
    "loyalty_program": "gold"
  }
}
```

#### Error Responses

- `400 Bad Request`: Returned if the request body contains invalid data or if required fields are missing.
- `404 Not Found`: Returned if the customer with the specified `customer_id` does not exist.
