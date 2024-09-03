---
sidebar_position: 2
---

**Endpoint:** `GET https://api.jani.com/transactions`

This endpoint returns a paginated list of transactions associated with your account. You can use various query parameters to filter and page through the results to find specific transactions.

#### Query Parameters:

- **after** (string): Returns entities after the specified Jani ID for paginated results. Used in the `meta.pagination.next` URL in responses for list operations.

- **billed_at** (string): Returns entities billed at a specific time. Accepts an RFC 3339 datetime string, with operators like `[LT]`, `[LTE]`, `[GT]`, or `[GTE]` for less than, less than or equal to, greater than, or greater than or equal to, respectively.

- **collection_mode** (string): Filters results based on the specified collection mode (e.g., `automatic`, `manual`).

- **created_at** (string): Filters entities created at a specific time, using the same format and operators as `billed_at`.

- **customer_id** (array[string]): Filters transactions associated with the specified customer ID(s). You can specify multiple customer IDs using a comma-separated list.

- **id** (array[string]): Returns only the transactions matching the specified Jani ID(s). Use a comma-separated list for multiple IDs.

- **include** (array[string]): Includes related entities in the response. Specify multiple entities using a comma-separated list.

- **invoice_number** (array[string]): Filters transactions matching the specified invoice number(s). Use a comma-separated list for multiple invoice numbers.

- **origin** (array[string]): Filters transactions by their origin. Specify multiple origins using a comma-separated list.

- **order_by** (string): Orders returned entities by a specified field and direction (`ASC` for ascending, `DESC` for descending). Valid fields for ordering include `billed_at`, `created_at`, `id`, and `updated_at`.

- **status** (array[string]): Filters transactions by their status. Specify multiple statuses using a comma-separated list.

- **subscription_id** (array[string]): Filters transactions associated with the specified subscription ID(s). Use `null` to return transactions not linked to any subscription.

- **per_page** (integer): Sets the number of entities returned per page.

- **updated_at** (string): Filters transactions updated at a specific time, using the same format and operators as `billed_at`.

#### Response:

```json
{
  "data": [
    {
      "id": "txn_1234567890",
      "status": "completed",
      "customer_id": "ctm_0987654321",
      "address_id": "add_1122334455",
      "business_id": "biz_2233445566",
      "custom_data": {
        "order_reference": "ORDER-001",
        "notes": "First-time customer"
      },
      "currency_code": "USD",
      "origin": "subscription_charge",
      "subscription_id": "sub_3344556677",
      "invoice_id": "inv_4455667788",
      "invoice_number": "INV-001",
      "collection_mode": "automatic",
      "discount_id": "dsc_5566778899",
      "billing_details": {
        "billing_address": "123 Main St, Springfield, IL, USA",
        "company_name": "ACME Corp",
        "vat_number": "US123456789"
      },
      "billing_period": {
        "start": "2024-08-01T00:00:00Z",
        "end": "2024-08-31T23:59:59Z"
      },
      "items": [
        {
          "item_id": "itm_001",
          "name": "Pro Subscription",
          "quantity": 1,
          "unit_price": {
            "amount": "50.00",
            "currency": "USD"
          },
          "subtotal": {
            "amount": "50.00",
            "currency": "USD"
          }
        }
      ],
      "details": {
        "subtotal": {
          "amount": "50.00",
          "currency": "USD"
        },
        "tax": {
          "amount": "5.00",
          "currency": "USD"
        },
        "discount": {
          "amount": "10.00",
          "currency": "USD"
        },
        "total": {
          "amount": "45.00",
          "currency": "USD"
        }
      },
      "payments": [
        {
          "payment_id": "pay_1234567890",
          "status": "success",
          "amount": {
            "amount": "45.00",
            "currency": "USD"
          },
          "payment_method": "credit_card",
          "created_at": "2024-08-05T14:30:00Z"
        }
      ],
      "checkout": {
        "checkout_id": "chk_1234567890",
        "created_at": "2024-08-01T12:00:00Z",
        "status": "completed"
      },
      "created_at": "2024-08-01T12:00:00Z",
      "updated_at": "2024-08-05T14:30:00Z",
      "billed_at": "2024-08-05T14:00:00Z"
    }
  ],
  "meta": {
    "request_id": "req_1234567890abcdef",
    "pagination": {
      "per_page": 10,
      "next": "https://api.jani.com/transactions?after=txn_1234567890",
      "previous": null
    }
  }
}
```

- **data** (array[object]): Represents a list of transaction entities, each including the following attributes:

  - **id** (string): Unique Jani ID for this transaction entity.

  - **status** (string): Current status of the transaction (e.g., `billed`, `canceled`, `completed`, `past_due`).

  - **customer_id** (string or null): Jani ID of the customer associated with this transaction.

  - **address_id** (string or null): Jani ID of the address linked to this transaction.

  - **business_id** (string or null): Jani ID of the business related to this transaction.

  - **custom_data** (object or null): Your custom structured key-value data.

  - **currency_code** (string): The three-letter ISO 4217 currency code used for this transaction.

  - **origin** (string): Describes how this transaction was created (e.g., `api`, `subscription_charge`).

  - **subscription_id** (string or null): Jani ID of the subscription associated with this transaction.

  - **invoice_id** (string or null): Jani ID of the related invoice.

  - **invoice_number** (string or null): Invoice number for this transaction.

  - **collection_mode** (string): Specifies how payment is collected (e.g., `automatic`, `manual`).

  - **discount_id** (string or null): Jani ID of any discount applied to this transaction.

  - **billing_details** (object or null): Invoicing details, required if `collection_mode` is `manual`.

  - **billing_period** (object or null): The time period this transaction covers.

  - **items** (array[object]): List of items on this transaction.

  - **details** (object): The calculated totals for this transaction, including taxes and discounts.

  - **payments** (array[object]): List of payment attempts associated with this transaction.

  - **checkout** (object or null): Jani Checkout details for this transaction.

  - **created_at** (string date-time ): RFC 3339 datetime string indicating when this transaction was created.

  - **updated_at** (string date-time ): RFC 3339 datetime string indicating when this transaction was last updated.

  - **billed_at** (string date-tim > or null): RFC 3339 datetime string indicating when this transaction was billed.

- **meta** (object): Contains metadata about the response, including `pagination` for handling paginated results.

This endpoint provides a comprehensive view of all transactions within the Jani system, allowing for detailed tracking and management of financial operations.
