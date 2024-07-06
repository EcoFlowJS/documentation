---
sidebar_position: 1
---

# Getting Started

This guide will help you get EcoFlowJS installed and running in just a few minutes.

### Prerequisites

<Admonition type="info" icon="✅" title="Prerequisites">
    Before installing EcoFlowJS, the following requirements must be installed on your computer:

    - [Node.js](https://nodejs.org/en): Only [Active LTS or Maintenance LTS versions](https://nodejs.org/en/about/previous-releases) are supported (currently v18 and v20). Odd-number releases of Node, known as "current" versions of Node.js, are not supported (e.g. v19, v21).
    - npm (v6 and above)
    - Python (3.6.0 and above)

    **On Unix**
    
    - `make`
    - A proper C/C++ compiler toolchain, like [GCC](https://gcc.gnu.org/)

    **On macOS**

    - `Xcode Command Line Tools` which will install `clang`, `clang++`, and `make`.
        - Install the `Xcode Command Line Tools` standalone by running `xcode-select --install`. -- OR --
        - Alternatively, if you already have the [full Xcode installed](https://developer.apple.com/xcode/download/), you can install the Command Line Tools under the menu `Xcode -> Open Developer Tool -> More Developer Tools...`.

    **On Windows**

    Install tools with [Chocolatey](https://chocolatey.org/):
    ```bash
    choco install visualstudio2022-workload-vctools -y
    ```
    Or install and configure Visual Studio tools manually:
        - Install Visual C++ Build Environment: For Visual Studio 2019 or later, use the `Desktop development with C++` workload from [Visual Studio Community](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community). For a version older than Visual Studio 2019, install [Visual Studio Build Tools](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools) with the `Visual C++ build tools` option.

</Admonition>

### Installation

To install EcoFlowJS globally using npm:

```bash
sudo npm install -g @ecoflow/cli@latest
```

:::info
On Windows, omit `sudo`.
:::
That command will install EcoFlowJS as a global module along with its dependencies.

## Running EcoFlowJS

After installation, start EcoFlowJS with the `ecoflow` command:

```bash
ecoflow
```

Terminal output

```
[ 29-5-2024 22:05:26 ] : [ EcoFlow ] : Starting up EcoFlow services
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : ====================================
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : Starting Application....
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : Adding Database Connection _sysDB
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : Database Connection Added named : _sysDB
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : System DataBase Connection Successfully
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : Installing default modules using ecoModule
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : Initializing the existing flow...
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : Server listening on http://127.0.0.1:4000
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : ====================================
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : Server Ready to use!!!
```

Access the EcoFlowJS editor at [http://127.0.0.1:4000](http://127.0.0.1:4000).
