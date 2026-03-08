## Overview

A distributed hash table system implemented in C as part of the CS-202 Computer Systems course at EPFL. The project implements core concepts from Amazon's Dynamo paper, building a client-server key-value store with configurable replication and fault tolerance over a UDP network layer.

## Consistent Hashing

Keys are distributed across server nodes using a consistent hashing ring built on SHA-1. Each server is assigned a position on the ring, and keys are routed to the appropriate node based on their hash value. This approach minimizes key redistribution when nodes join or leave the cluster.

## Quorum-Based Consensus

The system implements a quorum protocol with three configurable parameters:

- **N (replication factor):** How many nodes store each key.
- **W (write quorum):** How many nodes must acknowledge a write for it to succeed.
- **R (read quorum):** How many nodes must respond to a read for it to succeed.

By tuning these parameters, the system can trade off between consistency and availability. For example, setting W + R > N guarantees strong consistency, while lower values allow the system to remain available even when some nodes are unreachable.

## Concurrency Model

The server uses POSIX threads to handle concurrent client requests. Each incoming request is processed in its own thread, with mutex synchronization protecting shared data structures. This allows the server to handle multiple operations simultaneously without data corruption.

## Network Layer

All communication uses UDP sockets with a custom request routing protocol. The network layer handles serialization, timeout detection, and error recovery. Since UDP is unreliable by design, the application layer implements its own retry logic and acknowledgment scheme to ensure data delivery.
