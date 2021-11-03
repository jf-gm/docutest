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
@ApiDocs(true)
@Table({
  tableName: "hero",
})
export class Hero extends BaseModel<Hero> {
  @ResponseRequired(true)
  @RequestRequired(true)
  @UpdateRequired(true)
  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: null,
  })
  name: string;
}
  `,
  `
@Controller("hero", Hero)
@ApiDocs()
export class HeroController extends ModelController<Hero> {
  @ApiDocsRouteSummary("Get a list of Heros")
  @Get("/")
  @Middlewares([])
  getHeros=(req, res) => this.handleFindAll(req, res);

  @ApiDocsRouteSummary("Get a Hero by Id")
  @Get("/:id")
  @Auth()
  @Middlewares([])
  getHero=(req, res) => this.handleFindOne(req, res);

  @ApiDocsRouteSummary("Adds a new Hero")
  @Post("/")
  @Auth()
  @Middlewares([stripNestedObjects(),])
  postHero=(req, res) => this.handleCreate(req, res);

  @ApiDocsRouteSummary("Upload Hero by Id")
  @Put("/:id")
  @Auth()
  @Middlewares([stripNestedObjects(),])
  putHero=(req, res) => this.handleUpdate(req, res);

  @ApiDocsRouteSummary("Delete Hero by Id")
  @Delete("/:id")
  @Auth()
  @Middlewares([])
  deleteHero=(req, res) => this.handleDelete(req, res);
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