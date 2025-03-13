# Poetry Lexicon

This project contains [AT Protocol](https://atproto.com) Lexicon schemas for poetry records and their grouping lists, along with generated TypeScript models for validation and development.

## Project Structure

- **lexicons/**: Contains the Lexicon schema JSON files.
  - `uk.ewancroft.anthology.poem.json`
  - `uk.ewancroft.anthology.list.json`
  - `uk.ewancroft.anthology.listitem.json`
- **src/**: Contains source code.
  - **models/**: Generated (or manually created) TypeScript models for the schemas.
    - `Poem.ts`
    - `PoemList.ts`
    - `PoemListItem.ts`
  - `index.ts`: Entry point of the application.
- **tests/**: Contains test scripts.
  - `poem.test.ts`
  - `poemList.test.ts`
  - `poemListItem.test.ts`
- **package.json**: Project configuration and scripts.
- **tsconfig.json**: TypeScript configuration.
- **README.md**: Project documentation.

## Scripts

- **Generate Models:**  
  Run the following command to generate TypeScript models from your Lexicon schemas:

  ```bash
  npm run gen
  ```

- **Build Project:**  
  Compile the TypeScript code:

  ```bash
  npm run build
  ```

- **Run Application:**  
  Start the application:

  ```bash
  npm start
  ```

- **Run Tests:**  
  Execute tests using Jest:

  ```bash
  npm test
  ```

## License

[MIT](/LICENSE)
