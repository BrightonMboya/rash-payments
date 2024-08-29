---
sidebar_position: 5
---

The `Update Discount` endpoint allows you to modify the details of an existing discount. This can be useful for changing the discount's status, updating the discount amount, or adjusting its usage limit.

#### Endpoint

```http
PATCH /api/v1/discounts/{discount_id}
```

#### Path Parameters

- `id` (string): The unique identifier of the discount you wish to update. This ID is prefixed with `dsc_`.

#### Request Body

The request body should be a JSON object containing the attributes you want to update. Only the fields provided in the request will be updated; all other fields will remain unchanged.

#### Updatable Fields

- `description` (string or null): A brief explanation of the discount, typically used for internal reference or to provide additional context.

- `code` (string or null): A unique code that customers can use to apply this discount at checkout. Leave this field as `null` if you don't want to change the code.

- `type` (string): The type of discount being applied. Possible values include:
  - `percentage`: A percentage reduction from the total price.
  - `fixed_amount`: A fixed amount to be subtracted from the total price.
  - `flat_per_seat`: Discounts a transaction by a flat amount per unit.

- `status` (string): The status of the discount. Possible values include:
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
  "description": "15% off on all items for autumn sale",
  "code": "AUTUMN15",
  "status": "active",
  "usage_limit": 300,
  "amount": "15"
}
```

#### Response

If the discount is successfully updated, the API will return a JSON object representing the updated discount.

#### Example Response

```json
{
  "id": "dsc_01h3vjs3b16yc3f9q8q9pfrb78",
  "description": "15% off on all items for autumn sale",
  "code": "AUTUMN15",
  "type": "percentage",
  "status": "active",
  "usage_limit": 300,
  "currency_code": null,
  "enabled_for_checkout": true,
  "amount": "15",
  "times_used": 4,
  "custom_data": {
    "campaign": "autumn_sale_2024"
  },
  "created_at": "2024-08-26T12:15:00.000Z",
  "updated_at": "2024-09-10T10:00:00.000Z"
}
```

#### Error Responses

- `400 Bad Request`: Returned if the request body contains invalid fields or values.
- `404 Not Found`: Returned if the discount with the specified ID does not exist.
