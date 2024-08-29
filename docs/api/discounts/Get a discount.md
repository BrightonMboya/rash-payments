---
sidebar_position: 4
---


The `Get Discount` endpoint allows you to retrieve detailed information about a specific discount. This is useful for viewing the configuration of a discount, checking its status, and understanding its usage and applicability.

#### Endpoint

```http
GET /api/v1/discounts/{discount_id}
```

#### Path Parameters

- `id` (string): The unique identifier of the discount you wish to retrieve. This ID is prefixed with `dsc_`.

#### Example Request

```http
GET /api/v1/discounts/dsc_01h3vjs3b16yc3f9q8q9pfrb78
```

#### Response

The response is a JSON object representing the discount with the specified ID. It includes all the attributes defined for the discount.

#### Discount Object

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

- `currency_code` (string or null): The three-letter ISO 4217 currency code. This field is required if the discount type is `fixed_amount` or `flat_per_seat`.

- `enabled_for_checkout` (boolean): Indicates whether this discount can be applied during checkout.

- `times_used` (integer): The number of times this discount has been applied during checkout. This value is automatically updated by the system after each use.

- `amount` (string): The value of the discount. For percentage discounts, this should be a value between 0.01 and 100. For `fixed_amount` and `flat_per_seat` discounts, this should be the amount in the smallest denomination of the specified currency (e.g., "500" for $5.00).

- `custom_data` (object or null): Structured key-value data for custom information related to the discount.

- `created_at` (string): The date and time when the discount was created, in ISO 8601 format.

- `updated_at` (string): The date and time when the discount was last updated, in ISO 8601 format.

#### Example Response

```json
{
  "id": "dsc_01h3vjs3b16yc3f9q8q9pfrb78",
  "description": "10% off on all items for summer sale",
  "code": "SUMMER10",
  "type": "percentage",
  "status": "active",
  "usage_limit": 500,
  "currency_code": null,
  "enabled_for_checkout": true,
  "times_used": 100,
  "amount": "10",
  "custom_data": {
    "campaign": "summer_sale_2024"
  },
  "created_at": "2024-08-26T12:15:00.000Z",
  "updated_at": "2024-08-26T12:15:00.000Z"
}
```

#### Error Responses

- `404 Not Found`: Returned if the discount with the specified ID does not exist.
