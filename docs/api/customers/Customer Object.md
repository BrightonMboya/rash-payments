---
sidebar_position: 1
---

The `Customer` object represents an individual or organization that interacts with your business. This object contains information about the customer, including their contact details, billing information, and account status.

Customers contains two sub entities:
- `Addresses` which holds information about customer billing addresses. This is commonly used for B2C businesses.
- `Businesses` which holds information when dealing with enteprise. Commonly used with B2B businesses.

#### Customer Object Structure

- `id` (string): A unique identifier for the customer. This ID is typically prefixed with `cus_`.

- `name` (string): The full name of the customer. This can be either the individual's name or the name of the organization.

- `email` (string): The email address of the customer. This is used for communication and sending receipts or notifications.

- `phone` (string or null): The phone number of the customer. This is optional and used for contact purposes.

- `address` (object or null): The billing address of the customer. This object can be null if the address is not provided.
  - `city` (string): The city of the address.
  - `country` (string): The country of the address, represented as a two-letter ISO 3166-1 alpha-2 country code.

- `payment_method` (string or null): The payment method associated with the customer, such as a credit card, mobile payment or bank account. This is optional and can be null if not set.

- `created_at` (string): The date and time when the customer record was created, in ISO 8601 format.

- `updated_at` (string): The date and time when the customer record was last updated, in ISO 8601 format.

- `status` (string): The status of the customer's account. Possible values include:
  - `active`: The customer's account is active and in good standing.
  - `inactive`: The customer's account is inactive and may require reactivation.
  - `suspended`: The customer's account is suspended due to issues such as payment problems.

- `custom_data` (object or null): A structured key-value data that contains additional custom information about the customer.

#### Example Customer Object

```json
{
  "id": "cus_01h3vjs3b16yc3f9q8q9pfrb78",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "phone": "+1234567890",
  "address": {
    "line1": "123 Main St",
    "line2": "Apt 4B",
    "city": "Springfield",
    "state": "IL",
    "postal_code": "62701",
    "country": "US"
  },
  "payment_method": "momo_01h3vjs3b16yc3f9q8q9pfrb78",
  "created_at": "2024-08-26T12:15:00.000Z",
  "updated_at": "2024-09-01T14:30:00.000Z",
  "status": "active",
  "custom_data": {
    "loyalty_program": "gold"
  }
}
```

#### Key Points

- **Identification:** Each customer has a unique `id` to distinguish them from other customers.
- **Contact Information:** Includes `name`, `email`, and optionally `phone` and `address` for communication and billing purposes.
- **Account Status:** The `status` field helps manage customer accounts and their current standing.
- **Custom Data:** Allows storing additional information that might be relevant for personalized customer interactions or business needs.

The `Customer` object is essential for managing and interacting with individuals or organizations using your billing platform, providing a comprehensive view of their details and status.