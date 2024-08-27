---
sidebar_position: 5
---

### Update a Price

This endpoint allows you to modify the details of an existing price entity. This is useful for making adjustments to pricing, updating billing cycles, or changing the status of a price entity. Note that certain fields, like `product_id` and `type`, cannot be modified after the price entity is created.

#### Endpoint

```http
PATCH /api/v1/prices/{price_id}
```

#### Path Parameters

- `price_id` (string, required): The unique identifier of the price entity you want to update.

#### Request Body

The request body should be a JSON object containing the fields you wish to update. All fields are optional, and only the fields included in the request will be updated.

- `unit_price` (object, optional):
  - `amount` (string, optional): The new amount to be charged for the product.
  - `currency` (string, optional): The new currency code in which the price will be charged, following ISO 4217 standards.
- `name` (string, optional): The new descriptive name of the price shown to customers at checkout.
- `description` (string or null, optional): The new short description about the price for internal reference.
- `custom_data` (object or null, optional): The updated structured key-value data containing additional information about the price.
- `billing_cycle` (object or null, optional): The updated billing cycle details for recurring payments. If the price is non-recurring, set this to `null`.
  - `frequency` (integer, optional): The new frequency at which the price should be charged based on the interval.
  - `interval` (string, optional): The new unit of time for the billing cycle. Possible values include `daily`, `weekly`, `monthly`, or `yearly`.
- `status` (string, optional): The new status of the price entity. Possible values include `active`, `inactive`, or `archived`.

#### Example Request

```json
{
    "unit_price": {
        "amount": "599",
        "currency": "USD"
    },
    "name": "Updated Monthly Subscription",
    "description": "Updated monthly subscription for the basic tier of services.",
    "billing_cycle": {
        "frequency": 1,
        "interval": "monthly"
    },
    "status": "active"
}
```

#### Response

On successful update, the API will return the updated price entity as a JSON object.

- `id` (string): The unique identifier of the price entity.
- `product_id` (string): The unique identifier of the product associated with this price.
- `unit_price` (object):
  - `amount` (string): The updated amount to be charged for the product.
  - `currency` (string): The updated currency code in which the price will be charged.
- `name` (string): The updated descriptive name of the price shown to customers at checkout.
- `description` (string or null): The updated short description about the price for internal reference.
- `type` (string): The type of pricing applied to the product (unchangeable).
- `custom_data` (object or null): The updated structured key-value data containing additional information about the price.
- `billing_cycle` (object or null): The updated billing cycle details for recurring payments.
  - `frequency` (integer): The updated frequency at which the price should be charged based on the interval.
  - `interval` (string): The updated unit of time for the billing cycle.
- `status` (string): The updated status of the price entity.
- `created_at` (string): The date and time when the price entity was created, in ISO 8601 format.
- `updated_at` (string): The date and time when the price entity was last updated, in ISO 8601 format.

#### Example Response

```json
{
    "id": "price_01h2vjf02g163xfj1rh1tkfz89",
    "product_id": "pro_01h1vjes1y163xfj1rh1tkfb65",
    "unit_price": {
        "amount": "599",
        "currency": "USD"
    },
    "name": "Updated Monthly Subscription",
    "description": "Updated monthly subscription for the basic tier of services.",
    "type": "recurring",
    "custom_data": null,
    "billing_cycle": {
        "frequency": 1,
        "interval": "monthly"
    },
    "status": "active",
    "created_at": "2024-08-26T10:15:30.302Z",
    "updated_at": "2024-08-26T12:00:00.302Z"
}
```

#### Error Responses

- `400 Bad Request`: Returned if the request body contains invalid data or if an attempt is made to change an immutable field (`product_id`, `type`).
- `404 Not Found`: Returned if no price entity with the specified `price_id` exists.
- `409 Conflict`: Returned if the update would result in a conflict, such as setting a duplicate `name` for a product.

#### Use Cases

- **Price Adjustment:** Update the price of a product in response to market changes or new pricing strategies.
- **Promotion Updates:** Modify the pricing details or status for limited-time promotions or offers.
- **Subscription Management:** Adjust the billing cycle or amount for subscription-based products as needed.

This endpoint is crucial for maintaining and updating the pricing configurations within your system, ensuring that your products are always aligned with your business goals and strategies.