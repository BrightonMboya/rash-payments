---
sidebar_position: 3
---


This endpoint allows you to create a new discount that can be applied to products, prices, or orders during checkout. This is useful for running promotions, offering limited-time discounts, or creating special offers for specific customer segments.

#### Endpoint

```http
POST /api/v1/discounts
```

#### Request Body

The request body should be a JSON object containing the following attributes:

- `description` (string or null): A brief explanation of the discount, used for internal reference or to provide additional context.

- `code` (string or null): A unique code that customers can use to apply this discount at checkout. Leave this field as `null` if the discount should not require a code.

- `type` (string): The type of discount being applied. Possible values include:
  - `percentage`: A percentage reduction from the total price.
  - `fixed_amount`: A fixed amount to be subtracted from the total price.
  - `flat_per_seat`: Discounts a transaction by a flat amount per unit.

- `status` (string): The initial status of the discount. Possible values include:
  - `active`: The discount is active and can be used during checkout.
  - `archived`: The discount is archived and cannot be used during checkout.

- `usage_limit` (integer or null): The maximum number of times the discount can be used. Set this to `null` for unlimited usage.

- `currency_code` (string or null): The three-letter ISO 4217 currency code. This field is required if the discount type is `fixed_amount` or `flat_per_seat`.

- `enabled_for_checkout` (boolean): Set to `true` if the discount should be available for use during checkout.

- `amount` (string): The value of the discount. For percentage discounts, this should be a value between 0.01 and 100. For `fixed_amount` and `flat_per_seat` discounts, this should be the amount in the smallest denomination of the specified currency (e.g., "500" for $5.00).

- `custom_data` (object or null): Your own structured key-value data to store additional information related to the discount.

#### Example Request

```json
{
  "description": "10% off on all items for summer sale",
  "code": "SUMMER10",
  "type": "percentage",
  "status": "active",
  "usage_limit": 500,
  "enabled_for_checkout": true,
  "amount": "10",
  "custom_data": {
    "campaign": "summer_sale_2024"
  }
}
```

#### Response

If the discount is successfully created, the API will return a JSON object representing the newly created discount.

#### Example Response

```json
{
  "id": "dsc_01h3vjs3b16yc3f9q8q9pfrb78",
  "description": "10% off on all items for summer sale",
  "code": "SUMMER10",
  "type": "percentage",
  "status": "active",
  "usage_limit": 500,
  "times_used": 0,
  "currency_code": null,
  "enabled_for_checkout": true,
  "amount": "10",
  "custom_data": {
    "campaign": "summer_sale_2024"
  },
  "created_at": "2024-08-26T12:15:00.000Z",
  "updated_at": "2024-08-26T12:15:00.000Z"
}
```

#### Error Responses

- `400 Bad Request`: Returned if the request body is missing required fields, or if any fields have invalid values.
- `409 Conflict`: Returned if a discount with the same `code` already exists.

#### Use Cases

- **Promotional Discounts:** Create discounts for seasonal promotions or special events.
- **Customer Loyalty:** Offer discounts to returning customers or those who have reached a certain milestone.
- **Cart Abandonment:** Create discount codes that can be offered to users who have abandoned their carts to encourage them to complete their purchase.

This endpoint is essential for businesses looking to implement dynamic pricing strategies and promotional offers to attract and retain customers.