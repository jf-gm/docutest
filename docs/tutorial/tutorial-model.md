---
sidebar_position: 1
---

# Model creation

Run the next command *(Remember being located at the directory project)*:

```shell
flug model
```

Introduce a name for your model

```shell
Welcome to the Flugzeug Model generator

? Model name: Hero
```

Now you will see a new file on ```app/models``` with the name **Hero.ts**

```ts title="Hero.ts"
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

```

## Columns

You can add more columns

```ts title="Hero.ts"
...
export class Hero extends BaseModel<Hero> {
  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: null,
  })
  name: string;

  @Column({
    type: DataType.ENUM("hero", "sidekick"),
    allowNull: false,
    defaultValue: "hero",
  })
  role: "hero" | "sidekick";

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
    defaultValue: 0
  })
  power: number;
  
}

```

You can see more DataTypes on [Sequelize documentation](https://sequelize.org/v4/manual/tutorial/models-definition.html#data-types)


## Hook decorators

*Hooks can be attached to your models. All Model-level hooks are supported.*

*Each hook must be a static method. Multiple hooks can be attached to a single method, and you can define multiple methods for a given hook.*

*The name of the method cannot be the same as the name of the hook (for example, a @BeforeCreate hook method cannot be named beforeCreate). That’s because Sequelize has pre-defined methods with those names.*

```ts title="Hero.ts"
...
export class Hero extends BaseModel<Hero> {

  ...

  @BeforeUpdate
  @BeforeCreate
  static capitalizeRole(hero: Hero, _options: any) {
    hero.role = hero.role.toLocaleUpperCase();
  }

  @BeforeCreate
  static addPunch(instance: Person) {
    // this will also be called when an instance is created
    instance.name += ' 🥊';
  }

}
```
