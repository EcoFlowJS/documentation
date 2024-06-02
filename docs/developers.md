---
sidebar_position: 6
---

# Developer Guide

To run the latest code from the repository, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/EcoFlowJS/eco-flow.git
```

Or clone recursively with submodules:

```bash
git clone --recurse-submodules https://github.com/EcoFlowJS/eco-flow.git
```

### Navigate to the Project Directory

```bash
cd eco-flow
```

### Install Dependencies

```bash
npm install --legacy-peer-deps
```

### Build the Project

```bash
npm run build
```

### Start the Server

Start the backend:

```bash
npm run dev:backend
```

Start the frontend:

```bash
npm run frontend
```

:::note
Ensure you cloned with submodules for these commands to work.
:::
