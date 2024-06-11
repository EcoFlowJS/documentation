# EcoServer

EcoServer is a class that extends Koa responsible for the running of application http server.

## API Reference

### Start Server

**startServer()** ⇒ `Promise<httpServer.Server | httpsServer.Server>`

Starts the server and listens on the specified port and host.

**Return:** A Promise that resolves to an HTTP or HTTPS server instance.

### Stop Server

**closeServer([exit])** ⇒ `Promise<void>`

Asynchronously closes the server.

**Return:** A Promise that resolves once the server is closed.

**_Available arguments :_**

| Parameter | Type `(Default)`    | Description                                           |
| :-------- | :------------------ | :---------------------------------------------------- |
| [exit]    | `boolean` `(false)` | Whether to exit the process after closing the server. |

### Restart Server

**restartServer()** ⇒ `Promise<void>`

Asynchronously restarts the server process.

**Return:** A Promise that resolves when the server has been successfully restarted.

### initialize Passport

**initializePassport([options])** ⇒ `Promise<void>`

Initializes Passport with the provided options.

**Return:** A promise that resolves once Passport has been initialized.

**_Available arguments :_**

| Parameter | Type                            | Description                                                                                                      |
| :-------- | :------------------------------ | :--------------------------------------------------------------------------------------------------------------- |
| [options] | `StrategyOptionsWithoutRequest` | The options to configure Passport. Official documentations can be found [here](https://www.passportjs.org/docs/) |

## Properties

| Parameter    | Type                    | Description                                                                                                               |
| :----------- | :---------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| passport     | `passport`              | A reference to the Passport module. Official documentations can be found [here](https://www.passportjs.org/docs/)         |
| systemSocket | `Server`                | Represents a server socket for system communication. Official documentations can be found [here](https://socket.io/docs/) |
| socket       | `Server`                | Represents socket server instance. Official documentations can be found [here](https://socket.io/docs/)                   |
| baseUrl      | `string`                | The base URL formed by combining the protocol, host, and port.                                                            |
| isSecure     | `boolean`               | `true` if the connection is secure (HTTPS), `false` otherwise                                                             |
| serverState  | `"Online" \| "Offline"` | The current server state.                                                                                                 |

## TypeScript Properties

### `SocketServer`

```ts
interface SocketServer {
  /** Representing a Socket Server */
  io: Server;

  /** Representing the Socket of Socket Server */
  socket: Socket;
}
```

:::note[**Additional Types**]
The EcoServer is an inherited instance of `koajs` and a more appropriate can be found [here](https://koajs.com/)
:::
