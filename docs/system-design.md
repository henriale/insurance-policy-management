## Overview

the `/docs/diagram.jpg` shows a high level architecure for an insurance application that will be consumed by multiple insurance carriers and process loads of data from them.

## Services

1. API Gateway to handle the routes and requests as well as enforcing access policies.
2. Load Balancer for high availability, scaling the API and distributing traffic.
3. Stateless Policy Management API
4. Storage for raw files, backups, assets.
5. Caching to reduce response time.
6. Message Queues to handle async communication between services.
7. Database (can be either SQL, no-SQL or both)
8. Monitoring tool for logging, monitoring and alerting.

