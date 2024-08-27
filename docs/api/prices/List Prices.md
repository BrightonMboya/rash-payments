---
sidebar_position: 2
---
### List Prices

This endpoint allows you to retrieve a list of all price entities associated with your products. This endpoint is useful for displaying available pricing options, managing price configurations, or integrating with other parts of your system. You can use the query parameters to configure how the results.

#### Endpoint

```http
GET /api/v1/prices
```

#### Query Parameters

- `product_id` (string, optional): Filter the prices by a specific product. Only prices associated with the specified product will be returned.
- `status` (string, optional): Filter the prices by their status. Possible values include `active`, `inactive`, or `archived`.

#### Response

The response is a JSON array of price objects. Each price object contains the following attributes:

- `id` (string): A unique identifier for the price entity.
- `product_id` (string): The unique identifier of the product associated with this price.
- `unit_price` (object):
  - `amount` (string): The amount to be charged for the product.
  - `currency` (string): The currency code in which the price will be charged, following ISO 4217 standards.
- `name` (string): A descriptive name of the price shown to customers at checkout.
- `description` (string or null): A short description about the price for internal reference.
- `type` (string): The type of pricing applied to the product. Possible values include:
  - `one_time`: A one-time payment for the product.
  - `recurring`: A recurring payment, typically associated with subscription-based products.
  - `usage`: A usage-based payment, where the amount varies based on usage metrics.
- `custom_data` (object or null): A structured key-value data that contains additional information about the price.
- `billing_cycle` (object or null): Details on how often the price should be charged for recurring payments:
  - `frequency` (integer): How often the price should be charged based on the interval.
  - `interval` (string): The unit of time for the billing cycle. Possible values include `daily`, `weekly`, `monthly`, or `yearly`.
- `status` (string): The current status of the price entity. Possible values include `active`, `inactive`, or `archived`.
- `created_at` (string): The date and time when the price entity was created, in ISO 8601 format.
- `updated_at` (string): The date and time when the price entity was last updated, in ISO 8601 format.

#### Example Request

```http
GET /api/v1/prices?product_id=pro_01h1vjes1y163xfj1rh1tkfb65&status=active
```

#### Example Response

```json
[
    {
        "id": "price_01h1vjf02g163xfj1rh1tkfz67",
        "product_id": "pro_01h1vjes1y163xfj1rh1tkfb65",
        "unit_price": {
            "amount": "999",
            "currency": "USD"
        },
        "name": "Monthly Subscription",
        "description": "Access to premium features with a monthly billing cycle.",
        "type": "recurring",
        "custom_data": {
            "tier": "premium"
        },
        "billing_cycle": {
            "frequency": 1,
            "interval": "monthly"
        },
        "status": "active",
        "created_at": "2023-06-01T13:35:22.302Z",
        "updated_at": "2024-04-05T15:50:12.163Z"
    },
    {
        "id": "price_01h1vjf02g163xfj1rh1tkfz68",
        "product_id": "pro_01h1vjes1y163xfj1rh1tkfb65",
        "unit_price": {
            "amount": "9999",
            "currency": "USD"
        },
        "name": "Annual Subscription",
        "description": "Access to premium features with an annual billing cycle.",
        "type": "recurring",
        "custom_data": {
            "tier": "premium"
        },
        "billing_cycle": {
            "frequency": 1,
            "interval": "yearly"
        },
        "status": "active",
        "created_at": "2023-06-01T13:35:22.302Z",
        "updated_at": "2024-04-05T15:50:12.163Z"
    }
]
```

#### Error Responses

- `400 Bad Request`: Returned if the query parameters are invalid.
- `404 Not Found`: Returned if no prices match the specified filters.

#### Use Cases

- **Product Pricing Display:** Retrieve and display all pricing options available for a product on your website or app.
- **Billing System Integration:** Use the list of prices to integrate with your billing system, ensuring accurate and up-to-date pricing.
- **Price Management:** Filter and review all price entities associated with a product to manage and update pricing strategies.

This endpoint is essential for retrieving and managing the various pricing options available for your products, ensuring that your billing system reflects the latest pricing configurations.