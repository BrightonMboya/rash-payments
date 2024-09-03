---
sidebar_position: 6
---

**Endpoint:** `POST /transactions/preview`

**Description:**  
Previews a transaction without actually creating it. This endpoint is ideal for simulating a transaction to see how it would be calculated based on the provided details. It is useful for creating dynamic pricing pages where users can build their own plans or check transaction details before finalizing.

**Request Body:**

The request body should include the necessary details to preview the transaction. You can provide location information to calculate taxes or localize prices, and specify items to preview their pricing.

**Fields to Include:**

- **address** (object, optional): Address for this transaction preview. Required if you do not provide `customer_ip_address`, `address_id`, or `customer_id`. Includes:
  - **postal_code** (string or null): ZIP or postal code of the address. Helps in accurate tax calculations.
  - **country_code** (string): Two-letter ISO 3166-1 alpha-2 country code.
- **customer_id** (string, optional): Paddle ID of the customer for this preview. Prefix with `ctm_`.
- **currency_code** (string, optional): ISO 4217 currency code (e.g., `USD`, `EUR`, `GBP`).
- **discount_id** (string, optional): Paddle ID of the discount applied to this preview. Prefix with `dsc_`.
- **ignore_trials** (boolean, optional): Set to `true` to ignore trials for transaction preview calculations. Defaults to `false`.
- **items** (array[object], required): List of items to preview. Each item includes:
  - **price_id** (string): Paddle ID of the catalog price for the item, prefixed with `pri_`.
  - **quantity** (integer): Quantity of this item.
  - **include_in_totals** (boolean): Whether this item should be included in totals. Used to exclude one-time charges from calculations.

**Request Example:**

```json
{
  "address": {
    "postal_code": "12345",
    "country_code": "US"
  },
  "currency_code": "USD",
  "items": [
    {
      "price_id": "pri_1234567890",
      "quantity": 2,
      "include_in_totals": true
    }
  ],
  "discount_id": "dsc_1234567890",
  "ignore_trials": false
}
```

**Response:**

The response provides a preview of the transaction, including calculated totals and available payment methods. The response does not create an actual transaction and therefore does not return an ID.

**Response Example:**

```json
{
  "customer_id": "ctm_1234567890",
  "address_id": "add_1234567890",
  "currency_code": "USD",
  "discount_id": "dsc_1234567890",
  "customer_ip_address": null,
  "address": {
    "postal_code": "12345",
    "country_code": "US"
  },
  "ignore_trials": false,
  "items": [
    {
      "price_id": "pri_1234567890",
      "quantity": 2,
      "include_in_totals": true
    }
  ],
  "details": {
    "subtotal": "100.00",
    "discount_amount": "10.00",
    "tax_amount": "8.00",
    "total_amount": "98.00",
    "currency_code": "USD"
  },
  "available_payment_methods": [
    "card",
    "paypal",
    "google_pay",
    "apple_pay"
  ],
  "meta": {
    "request_id": "req_1234567890"
  }
}
```

**Response Fields:**

- **customer_id** (string or null): Paddle ID of the customer for the preview, prefixed with `ctm_`.
- **address_id** (string or null): Paddle ID of the address used for the preview, prefixed with `add_`.
- **currency_code** (string): ISO 4217 currency code used.
- **discount_id** (string or null): ID of the discount applied.
- **customer_ip_address** (string or null): IP address used if provided.
- **address** (object or null): Address used for the preview.
- **ignore_trials** (boolean): Indicates if trials were ignored in the preview calculation.
- **items** (array[object]): List of items previewed.
- **details** (object): Calculated totals including:
  - **subtotal** (string): Total amount before discounts and taxes.
  - **discount_amount** (string): Amount discounted.
  - **tax_amount** (string): Tax amount calculated.
  - **total_amount** (string): Final total amount after discounts and taxes.
  - **currency_code** (string): Currency code for the amounts.
- **available_payment_methods** (array[string]): List of payment methods available for this transaction.
- **meta** (object): Metadata about the request, including:
  - **request_id** (string): Unique ID for the request.

**Notes:**

- This endpoint provides a preview without creating a real transaction.
- Use this for dynamic pricing pages and to validate transaction details before finalizing.