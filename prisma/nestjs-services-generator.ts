/*

Created By Dikki Setiawan

# Duplicate Prisma Models Script

This script automates the duplication of Prisma models in a specified source folder to an output base folder, while applying certain transformations.

## Introduction

The **Duplicate Prisma Models Script** is designed to ease the process of duplicating Prisma models from a source folder to an output base folder. It performs transformations on the content of the files during duplication.

## Prerequisites

Before using this script, ensure that you have the following installed:

- [Node.js](https://nodejs.org/)

## Installation

1. Clone this repository or download the script file.
2. Open a terminal and navigate to the directory containing the script.
3. Run the following command to install dependencies:

   ```bash
   npm install
   ```

## Usage

To run the script, use the following command:

```bash
bun run duplicatePrismaModels.ts <schemaPath> <sourceFolder> <outputBaseFolder> [excludedModels...]
```
example 
 bun run prisma/nestjs-services-generator.ts ./prisma/schema.prisma ./prisma/template/file ./src/services modelName1 modelName2

## Command Line Arguments

- `<schemaPath>`: Path to the Prisma schema file.
- `<sourceFolder>`: Path to the source folder containing the Prisma models to be duplicated.
- `<outputBaseFolder>`: Path to the base folder where duplicated models will be saved.
- `[excludedModels...]`: Optional list of models to be excluded during duplication.

## Example

```bash
bun run nestjs-services-generator.ts ./prisma/schema.prisma ./prisma/template/file ./src/services modelName1 modelName2
bun run nestjs-services-generator.ts ./prisma/schema.prisma ./prisma/template/file ./src/services modelName1 modelName2
```

## Notes

- Make sure you have the necessary permissions to execute the script.
- If there are issues, the script will output error messages to the console.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This script is licensed under the [MIT License](LICENSE).

*/

import {
  readFileSync,
  writeFileSync,
  readdirSync,
  mkdirSync,
  existsSync,
  statSync,
} from 'fs';
import { join, basename } from 'path';

// Extract model names from the Prisma schema
function extractModelsFromSchema(schemaPath: string): string[] {
  const schemaContent = readFileSync(schemaPath, 'utf-8');
  const models = schemaContent.match(/model\s+(\w+)\s+{/g);
  const filteredModels = models.filter(
    (model) => model !== 'itself' && model !== 'is',
  );
  return filteredModels.map((model) => model.trim().split(' ')[1]);
}

function duplicateFile(
  sourceFilePath: string,
  sourceDir: string,
  modelName: string,
  targetFilePath: string,
) {
  const content = readFileSync(sourceFilePath, 'utf8');
  const newContent = replacePathsWithHyphens(
    replacePreservingCase(
      content,
      basename(sourceDir).toLowerCase(),
      modelName,
    ),
  );
  writeFileSync(targetFilePath, newContent);
}

// Convert string to lowercase with hyphens
const toKebabCase = (input: string): string =>
  input
    .replace(/\s+/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();

// Replace words in a string while preserving case
const replacePreservingCase = (
  input: string,
  target: string,
  replacement: string,
): string =>
  input.replace(
    new RegExp(target, 'ig'),
    (match) =>
      (match.charAt(0).toUpperCase() === match.charAt(0)
        ? replacement.charAt(0).toUpperCase()
        : replacement.charAt(0).toLowerCase()) + replacement.slice(1),
  );

// Replace paths with hyphens in import statements
const replacePathsWithHyphens = (input: string): string =>
  input.replace(
    /from\s+(['"])(.*?)(['"])/g,
    (match, startQuote, path, endQuote) =>
      `from ${startQuote}${toKebabCase(path)}${endQuote}`,
  );

// Duplicate a folder recursively
const duplicateFolder = (
  sourceDir: string,
  targetDir: string,
  modelName: string,
): void => {
  if (!existsSync(targetDir)) mkdirSync(targetDir);

  const files = readdirSync(sourceDir);
  files.forEach((file) => {
    const sourceFilePath = join(sourceDir, file);
    const targetFilePath = join(
      targetDir,
      `${toKebabCase(modelName)}.${file.split('.').slice(1).join('.')}`,
    );

    if (statSync(sourceFilePath).isDirectory()) {
      duplicateFolder(sourceFilePath, targetDir, modelName);
    } else {
      if (!existsSync(targetFilePath)) {
        try {
          duplicateFile(sourceFilePath, sourceDir, modelName, targetFilePath);
        } catch (error: any) {
          console.error(
            `Error duplicating file ${sourceFilePath}:`,
            error.message,
          );
        }
      }
    }
  });
};

// Function to generate TypeScript content with array of model names and import paths
function generateModelNamesFile(
  models: string[],
  outputBaseFolder: string,
): void {
  const lowercasedModels = models.map(
    (model) => model.charAt(0).toLowerCase() + model.slice(1),
  );
  const importPaths = lowercasedModels.map((model) => {
    const kebabModelName = toKebabCase(model);
    return `./services/${kebabModelName}/${kebabModelName}.module`;
  });

  const existingFilePath = join(outputBaseFolder, 'generated-models.ts');
  let existingModels: string[] = [];
  let existingImports: string[] = [];

  // Create the directory if it doesn't exist
  if (!existsSync(outputBaseFolder)) {
    mkdirSync(outputBaseFolder, { recursive: true });
  }

  // Check if the existing file exists
  if (existsSync(existingFilePath)) {
    try {
      const existingContent = readFileSync(existingFilePath, 'utf-8');
      const existingFileData = existingContent.match(
        /export\s+const\s+(\w+):\s+string\[\]\s+=\s+(.*?);/gs,
      );

      if (existingFileData) {
        existingFileData.forEach((data) => {
          const [, name, value] = data.match(
            /export\s+const\s+(\w+):\s+string\[\]\s+=\s+(.*?);/,
          );
          if (name === 'generatedModels') existingModels = JSON.parse(value);
          if (name === 'generatedImports') existingImports = JSON.parse(value);
        });
      }
    } catch (error) {
      console.error(
        `Error reading existing generated-models.ts file: ${error}`,
      );
    }
  }

  // Merge existing and new arrays
  const mergedModels = Array.from(
    new Set([...existingModels, ...lowercasedModels]),
  );
  const mergedImports = Array.from(
    new Set([...existingImports, ...importPaths]),
  );

  // Generate content with merged arrays
  const content = `
    export const generatedModels: string[] = ${JSON.stringify(
      mergedModels,
      null,
      2,
    )};
    export const generatedImports: string[] = ${JSON.stringify(
      mergedImports,
      null,
      2,
    )};
  `;

  writeFileSync(existingFilePath, content);
  console.log(`Generated generated-models.ts file at ${existingFilePath}`);
}

//bun run prisma/nestjs-services-generator.ts ./prisma/schema.prisma ./prisma/template/file ./src/services modelName1 modelName2
// Main execution
const main = (): void => {
  // Access command line arguments
  const [schemaPath, sourceFolder, outputBaseFolder, ...excludedModels] =
    process.argv.slice(2);

  if (!schemaPath || !sourceFolder || !outputBaseFolder) {
    console.error(
      'Usage: bun run duplicatePrismaModels.ts <script> <schemaPath> <sourceFolder> <outputBaseFolder> [excludedModels]',
    );
    return;
  }

  //
  if (!existsSync(outputBaseFolder))
    mkdirSync(outputBaseFolder, { recursive: true });

  let prismaModels = extractModelsFromSchema(schemaPath);

  // Filter out excluded models
  prismaModels = prismaModels.filter(
    (model) => !excludedModels.includes(model),
  );

  console.log(
    `${prismaModels.length} minus ${excludedModels.length} Models found in Prisma schema:`,
    prismaModels,
  );

  prismaModels.forEach((modelName) => {
    const targetFolder = join(outputBaseFolder, toKebabCase(modelName));
    duplicateFolder(sourceFolder, targetFolder, modelName);
  });

  // Write generated-models.ts file

  generateModelNamesFile(prismaModels, outputBaseFolder);

  console.log(`Models Duplication completed.`);
};

try {
  main();
} catch (error: any) {
  console.error('Error:', error.message);
}
