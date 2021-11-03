---
sidebar_position: 2
---

# API Models

## Model files

- Models are defined in `app/models`.
- The file name must be the model name in singular with the first letter in uppercase. (PascalCase)
- The module must export a class that extends Model from 'sequelize-typescript'.

## Model definition

- The name of the table for the model must be in singular and lower case.
- The model definition follows the 'sequelize-typescript' style: [documentation](https://github.com/RobinBuschmann/sequelize-typescript).

Models and associations will be automatically loaded on app startup, it is only needed to import the model where required.

#### Hook decorators

- `@ApiDocs` defines if it's going to generate documentation for the controller.
- `@ResponseRequired` optional decorator for API documentation.
- `@RequestRequired` optional decorator for API documentation.
- `@UpdateRequired` optional decorator for API documentation.

Example:

```js
import {
  Table,
  Column,
  DataType,
  BelongsTo,
  Model,
  ForeignKey,
} from "sequelize-typescript";
import { User } from "./User";

@ApiDocs(true)
@Table({
  tableName: "profile",
})
export class Profile extends Model<Profile> {
  @ResponseRequired(true)
  @RequestRequired(true)
  @UpdateRequired(true)
  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: null,
  })
  timeZone: string;

  @Column({
    type: DataType.ENUM("en", "es"),
    allowNull: true,
  })
  locale: "en" | "es";

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
```