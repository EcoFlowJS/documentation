# EcoContainer

EcoContainer is a class responsible for registering and resolving dependencies

## API Reference

### Registers Dependencies

**register(name, resolver)** ⇒ `EcoContainer`

Registers a service with a given name and resolver function in the EcoContainer.

**Return:** The EcoContainer instance with the service registered.

**_Available arguments :_**

| Parameter | Type `(Default)` | Description                            |
| :-------- | :--------------- | :------------------------------------- |
| name      | `string`         | The name of the service to register.   |
| resolver  | `string`         | The resolver function for the service. |

### Retrieves Dependencies

**get(name, [args])** ⇒ `EcoContainer`

Retrieves a value by name from the resolver.

If the value is already resolved, it returns the resolved value.

If the value is registered but not resolved, it resolves it using the registered resolver.

**Return:** The resolved value corresponding to the name, or undefined if not found.

**_Available arguments :_**

| Parameter | Type `(Default)` | Description                                 |
| :-------- | :--------------- | :------------------------------------------ |
| name      | `string`         | The name of the value to retrieve.          |
| args      | `unknown`        | Optional arguments to pass to the resolver. |
