---
sidebar_position: 2
---

# Services creation

Run the next command *(Remember being located at the directory project)*:

```shell
flug service
```

Introduce a name for your service

```shell
Welcome to the Flugzeug Service generator

? Service name: AssembleService
```

Now you will see a new file on ```app/services``` with the name **AssembleService.ts**

```ts title="AssembleService.ts"
import { log } from "@/libraries/Log";

class AssembleService {
  constructor() {
    // Initialize things that don't require other services or db to be initialized here
    // For everything else, use init()
  }

  init() {
    // Do your service initialization here
    // Call this on main.ts
    log.debug("Service initialized");
  }
}

const assembleService = new AssembleService();
export default assembleService;
```

To call the service you must add it to the file **main.ts** on `app/`

```ts title="main.ts"
...
import AssembleService from "@/services/AssembleService";

async function main(): Promise<void> {
  try {
    await setupDB();
    AssembleService.init();
    
    ...
}

main();
```