---
sidebar_position: 2
---

The **List Events** operation allows you to retrieve a collection of event entities that have occurred in your system. Each event represents a significant action or change, such as a subscription renewal, transaction creation, or customer action, all captured with detailed information about what happened, when it occurred, and what entity was involved.

By listing events, you can track important activities within your system, analyze patterns, and ensure you're aware of critical moments that might affect your billing, subscriptions, or customer interactions. This operation is especially useful for auditing, monitoring system behavior, or troubleshooting specific incidents.



### Event Information Provided

Each event returned by the list operation contains important details, such as:

- **Event ID**: A unique identifier for the event (e.g., `evt_12345`).
- **Event Type**: Describes the type of action or change that triggered the event, such as `subscription.created` or `transaction.refunded`.
- **Occurred At**: The timestamp when the event occurred, using RFC 3339 format.
- **Data**: An object containing the relevant entity or entities impacted by the event, which could include information about subscriptions, transactions, customers, or other system objects.


### Sample Response
```json
{
  "events": [
    {
      "event_id": "evt_12345",
      "event_type": "subscription.created",
      "occurred_at": "2023-09-05T14:35:22Z",
      "data": {
        "subscription_id": "sub_67890",
        "customer_id": "ctm_98765",
        "status": "active",
        "started_at": "2023-09-05T14:35:22Z",
        "next_billed_at": "2023-10-05T14:35:22Z",
        "billing_cycle": {
          "interval": "monthly",
          "frequency": 1
        },
        "price": {
          "amount": "49.99",
          "currency": "USD"
        }
      }
    },
    {
      "event_id": "evt_12346",
      "event_type": "subscription.canceled",
      "occurred_at": "2023-09-10T10:22:45Z",
      "data": {
        "subscription_id": "sub_67891",
        "customer_id": "ctm_98766",
        "status": "canceled",
        "canceled_at": "2023-09-10T10:22:45Z",
        "billing_cycle": {
          "interval": "yearly",
          "frequency": 1
        }
      }
    }
  ],
  "pagination": {
    "total": 2,
    "per_page": 10,
    "page": 1,
    "pages": 1
  }
}
```
### Use Cases for Listing Events:

- **Monitoring System Activity**: Track real-time system actions, such as subscription renewals, cancellations, and refunds.
- **Auditing and Compliance**: Retrieve a history of events to ensure compliance with internal or external auditing requirements.
- **Customer Support**: Use event data to troubleshoot specific issues, such as subscription pauses or transaction disputes.
- **Performance Analysis**: Analyze trends in subscription renewals, customer churn, and other important metrics based on past events.

