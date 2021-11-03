/* - - - - - - - - Card List component data - - - - - - - - */
export const cardsList = [
  {
    side: 'left',
    img: '',
    title: 'What is Flugzeug?',
    description: 'Flugzeug is a backend framework that seeks the following: Simplicity, Agility, and Robustness, always giving the option of Flexibility in case you need something more custom.'
  },
  {
    side: 'right',
    img: '',
    title: 'Processes',
    description: 'Processes are proposed from the design and modeling of the database, conversion from diagram to code, and steps to achieve basic and common processes or functionalities such as log in / password recovery, user permissions, CRUDs, etc.',
    top: '-100px'
  },
  {
    side: 'left',
    img: '',
    title: 'Batteries Included',
    description: 'From the moment you create a project with Flugzeug, it already includes features such as user management, permissions, sending emails, CRUDs with advanced queries, and more.',
    top: '-100px'
  },
  {
    side: 'right',
    img: '',
    title: 'Developer Experience',
    description: 'Flugzeug seeks to reduce repetitive tasks for developers, while presenting a logical and easy-to-understand structure.',
    top: '-100px'
  }
]

/* - - - - - - - - Card Carousel component data - - - - - - - - */
export const builtWith = [
  [
    {
      img: '/img/test/blastbotLogoRed.png',
      title: 'Blastbot'
    },
    {
      img: '/img/test/breezeyLogo.svg',
      title: 'Breezey'
    },
    {
      img: '/img/test/Ksquare-logo-stack.png',
      title: 'Ksquare Hire Site'
    }
  ]
]

/* - - - - - - - - Code Window component data - - - - - - - - */
export const commandOptions = [
  'flug model',
  'flug controller',
  'flug service'
]

export const codeTextFiles = [
  `
...

@Table({
  tableName: "hero",
})
export class Hero extends BaseModel<Hero> {
  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: null,
  })
  name: string;
  
}
  `,
  `
...

export class HeroController extends ModelController<Hero> {
  constructor() {
    super();
    this.name = "hero";
    this.model = Hero;
  }

  routes(): Router {
    this.router.get("/", (req, res) => this.handleFindAll(req, res));
    this.router.get("/:id", (req, res) => this.handleFindOne(req, res));
    this.router.post("/", stripNestedObjects(), (req, res) =>
      this.handleCreate(req, res),
    );
    this.router.put("/:id", stripNestedObjects(), (req, res) =>
      this.handleUpdate(req, res),
    );
    this.router.delete("/:id", (req, res) => this.handleDelete(req, res));

    return this.router;
  }
}

...
  `,
  `
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
  `
]

export const treeList = [
  [
    {
      name: 'app',
      type: 'directory',
      color: 'red',
      level: '1'
    },
    {
      name: 'models',
      type: 'directory',
      color: 'red',
      level: '2'
    },
    {
      name: 'Hero.ts',
      type: 'file',
      color: 'blue',
      level: '3'
    },
  ],
  [
    {
      name: 'app',
      type: 'directory',
      color: 'red',
      level: '1'
    },
    {
      name: 'controllers',
      type: 'directory',
      color: 'yellow',
      level: '2'
    },
    {
      name: 'Hero.ts',
      type: 'file',
      color: 'blue',
      level: '3'
    },
  ],
  [
    {
      name: 'app',
      type: 'directory',
      color: 'red',
      level: '1'
    },
    {
      name: 'services',
      type: 'directory',
      color: 'orange',
      level: '2'
    },
    {
      name: 'AssembleService.ts',
      type: 'file',
      color: 'blue',
      level: '3'
    },
  ]
]

export const filenames = [
  'app/models/Hero.ts',
  'app/controllers/Hero.ts',
  'app/services/AssembleService.ts'
]

export const codeDescription = `
An easy way for creating resources. Use Flugzeug command for creating models,
services and controllers.`