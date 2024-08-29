---
sidebar_position: 2
---


The `List Discounts` endpoint allows you to retrieve a list of all discounts. This endpoint is useful for managing and reviewing available discounts, including active promotions, archived discounts, and those that have expired or reached their usage limit.

#### Endpoint

```http
GET /api/v1/discounts
```

#### Response

The response is a JSON array of discount objects that match the specified query parameters.

#### Discount Object

Each discount object in the response contains the following attributes:

- `id` (string): A unique identifier for the discount entity, prefixed with `dsc_`.
  
- `description` (string or null): A brief explanation of the discount, typically used for internal reference or to provide additional context.

- `code` (string or null): Unique code that customers can use to apply this discount at checkout.

- `type` (string): The type of discount being applied. Possible values include:
  - `percentage`: A percentage reduction from the total price.
  - `fixed_amount`: A fixed amount to be subtracted from the total price.
  - `flat_per_seat`: Discounts a transaction by a flat amount per unit.

- `status` (string): The status of the discount that affects if the discount will be displayed on checkout. Possible values include:
  - `active`: The discount is active and can be used in checkout.
  - `archived`: The discount is archived and cannot be used in checkout.
  - `expired`: The discount has expired and cannot be used in checkout. This is set automatically by the system.
  - `used`: The discount has already reached the maximum number of redemptions. This is set automatically by the system according to the `usage_limit`.

- `usage_limit` (integer or null): The maximum number of times the discount can be used. If `null`, the usage limit is unlimited.

- `currency_code` (string or null): The three-letter ISO 4217 currency code. Required if the discount type is `fixed_amount` or `flat_per_seat`.

- `enabled_for_checkout` (boolean): Indicates whether this discount can be applied during checkout.

- `times_used` (integer): The number of times this discount has been applied during checkout. This value is automatically updated by the system after each use.

- `amount` (string): The amount to discount by. For percentage discounts, this should be a value between 0.01 and 100. For `fixed_amount` and `flat_per_seat` discounts, this should be the amount in the lowest denomination for the specified currency.

- `custom_data` (object or null): Structured key-value data for custom information related to the discount.

- `created_at` (string): The date and time when the discount was created, in ISO 8601 format.

- `updated_at` (string): The date and time when the discount was last updated, in ISO 8601 format.

#### Example Response

```json
[
    {
        "id": "dsc_01h3vjs3b16yc3f9q8q9pfrb76",
        "description": "10% off for first-time customers",
        "code": "WELCOME10",
        "type": "percentage",
        "status": "active",
        "usage_limit": 100,
        "currency_code": null,
        "enabled_for_checkout": true,
        "times_used": 25,
        "amount": "0.1",
        "custom_data": null,
        "created_at": "2024-01-15T08:30:00.000Z",
        "updated_at": "2024-08-26T12:00:00.000Z"
    },
    {
        "id": "dsc_01h3vjs3b16yc3f9q8q9pfrb77",
        "description": "Flat $5 off on all orders over $50",
        "code": "SAVE5",
        "type": "fixed_amount",
        "status": "active",
        "usage_limit": null,
        "currency_code": "USD",
        "enabled_for_checkout": true,
        "times_used": 40,
        "amount": "500",
        "custom_data": null,
        "created_at": "2024-02-20T10:15:00.000Z",
        "updated_at": "2024-08-26T12:00:00.000Z"
    }
]
```

#### Error Responses

- `400 Bad Request`: Returned if the query parameters are invalid.
- `404 Not Found`: Returned if no discounts match the specified query parameters.

#### Use Cases

- **Marketing Campaigns:** Retrieve active discounts to display on the checkout page or promotional materials.
- **Analytics:** Analyze the usage of different discounts to determine their effectiveness.
- **Discount Management:** Quickly access and manage all discounts, including those that are archived or have expired.

This endpoint is essential for keeping track of all available discounts within your system, ensuring that they are correctly applied during customer checkouts, and allowing for effective discount management and reporting.
