---
sidebar_position: 1
---

### Transaction Entity

The `Transaction` entity in Jani is central to calculating and capturing revenue. It holds information about the amounts being billed, associated products, prices, discounts, and customers. These transactions are key financial records that tie together various elements like products, prices, discounts, and customers to calculate revenue for checkouts, invoices, and subscriptions.

#### Overview

Transactions are automatically created in Jani when customers sign up using a checkout, during subscription lifecycle events like renewals or upgrades, and when new charges occur. You can also manually create transactions through the Jani dashboard or API. Once created, these transactions can be collected manually (e.g., via invoices) or automatically (e.g., through a stored payment method).

Transactions handle every aspect of revenue calculation, including complex proration, localized pricing, and tax computations. They serve as the source of truth for all calculated totals and are essential for collecting payments and recognizing revenue.

#### Key Concepts

- **Revenue Calculation**: Transactions are responsible for calculating revenue, ensuring all elements—like proration and tax—are accurately considered.
  
- **Payment vs. Transaction**: In Jani, transactions calculate and capture revenue, ready for payment. Payments are separate entities that represent attempts to collect payment against a transaction. Multiple payments may be associated with a single transaction, especially for large-value deals or failed payments.

- **Immutability**: Transactions are immutable records once billed, serving as a permanent financial record. If corrections are needed post-billing, they are handled through cancellations or adjustments rather than changes to the original transaction.

#### Attributes

- **id** (string): A unique identifier for this transaction entity, typically prefixed with `txn_`.
  
- **status** (string): Indicates the current status of the transaction. Possible values include:
  - `draft`: Missing required fields, typically the first stage of a checkout.
  - `ready`: Ready to be marked as billed or completed.
  - `billed`: Marked as billed, making it a legal record that cannot be changed.
  - `paid`: Fully paid but not yet processed.
  - `completed`: Fully paid and processed.
  - `canceled`: Canceled and no longer due.
  - `past_due`: Payment is overdue.
  
- **customer_id** (string or null): The unique identifier of the customer associated with this transaction, prefixed with `cus_`.

- **address_id** (string or null): The unique identifier of the address associated with this transaction, prefixed with `add_`.

- **business_id** (string or null): The unique identifier of the business associated with this transaction, prefixed with `biz_`.

- **custom_data** (object or null): A structured key-value data object for storing additional custom information related to the transaction.

- **currency_code** (string): A three-letter ISO 4217 currency code (e.g., `USD`, `EUR`, `GBP`). For manual collection modes, the currency must be USD, EUR, or GBP.

- **origin** (string): Describes how the transaction was created, with possible values including:
  - `api`: Created via the Jani API.
  - `subscription_charge`: Created automatically due to a one-time subscription charge.
  - `subscription_payment_method_change`: Created automatically during a payment method update.
  - `subscription_recurring`: Created automatically during a subscription renewal.
  - `subscription_update`: Created automatically due to a subscription update.
  - `web`: Created via Jani.js for a checkout.

- **subscription_id** (string or null): The unique identifier of the subscription associated with this transaction, prefixed with `sub_`.

- **invoice_id** (string or null): The unique identifier of the invoice related to this transaction, prefixed with `inv_`.

- **invoice_number** (string or null): An automatically generated invoice number when a transaction is marked as billed.

- **collection_mode** (string): Specifies how payment is collected for this transaction, with values like `automatic` (for checkout) or `manual` (for invoices).

- **discount_id** (string or null): The unique identifier of any discount applied to this transaction, prefixed with `dsc_`.

- **billing_details** (object or null): Details for invoicing, required if the collection mode is manual.

- **payment_terms** (object): Defines the payment terms for this transaction, detailing how long a customer has to pay after the invoice is issued.

- **enable_checkout** (boolean): Specifies whether the transaction can be paid using a Jani Checkout. Defaults to `false` if not specified.

- **purchase_order_number** (string): The customer's purchase order number, which appears on invoice documents.

- **additional_information** (string or null): Notes or other information to include on the invoice.

- **billing_period** (object or null): Defines the billing period for the transaction, set automatically by Jani for subscription renewals.

- **items** (array[object]): Lists the items on this transaction, each represented by a price entity.

- **details** (object): Contains calculated totals for the transaction, including proration, discounts, tax, and currency conversion. Considered the single source of truth for transaction totals.

- **payments** (array[object]): Lists all payment attempts for this transaction, including successful ones. Each payment is represented by a payment attempt ID and status.

#### Example Transaction Object

```json
{
  "id": "txn_01h1y8r2s3v4l5m6n7p8j9k0q3",
  "status": "completed",
  "customer_id": "cus_01h1w8r7s2v4l5m6n7p8j9k0q2",
  "address_id": "add_01h2y9r3s4v5l6m7n8p9j0k1q4",
  "business_id": "biz_01h3y9r3s4v5l6m7n8p9j0k1q4",
  "custom_data": {
    "order_id": "ord_01h1y8r2s3v4l5m6n7p8j9k0q3"
  },
  "currency_code": "USD",
  "origin": "api",
  "subscription_id": "sub_01h2z8r3s4v5l6m7n8p9j0k1q4",
  "invoice_id": "inv_01h3z9r3s4v5l6m7n8p9j0k1q4",
  "invoice_number": "INV-2024-001",
  "collection_mode": "automatic",
  "discount_id": null,
  "billing_details": null,
  "payment_terms": {
    "interval": "monthly",
    "frequency": 1
  },
  "enable_checkout": true,
  "purchase_order_number": "PO-2024-001",
  "additional_information": null,
  "billing_period": {
    "starts_at": "2024-09-01T00:00:00.000Z",
    "ends_at": "2024-09-30T23:59:59.999Z"
  },
  "items": [
    {
      "price_id": "pri_01h1z9r3s4v5l6m7n8p9j0k1q4",
      "quantity": 1,
      "price": {
        "amount": "5000",
        "currency": "USD"
      }
    }
  ],
  "details": {
    "totals": {
      "subtotal": "5000",
      "tax": "500",
      "total": "5500"
    }
  },
  "payments": [
    {
      "payment_attempt_id": "pay_01h2z8r3s4v5l6m7n8p9j0k1q5",
      "payment_method_id": "paymtd_01h3z9r3s4v5l6m7n8p9j0k1q6",
      "amount": "5500",
      "status": "captured",
      "created_at": "2024-09-04T08:30:00.000Z",
      "captured_at": "2024-09-04T08:35:00.000Z"
    }
  ],
  "created_at": "2024-09-01T08:00:00.000Z",
  "updated_at": "2024-09-04T08:35:00.000Z",
  "billed_at": "2024-09-02T08:00:00.000Z"
}
```

This detailed breakdown of the `Transaction` entity aligns with Jani’s functionality, ensuring that all aspects of financial transactions are properly recorded and managed. Transactions in Jani are designed to handle complex financial scenarios, provide transparency in billing and payment processing, and support a wide range of business models.