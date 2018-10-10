const fs = require('fs');
const YAML = require('js-yaml');
const argv = require('yargs')
  .describe('directory', 'Input directory')
  .describe('wrapper', 'Swagger UI wrapper')
  .describe('output', 'Output file')
  .demandOption(['directory', 'wrapper', 'output'])
  .argv;

const specs = fs.readdirSync(argv.directory)
  .filter(filename => filename.endsWith('.yaml'))
  .map(filename => {
    const spec = YAML.load(fs.readFileSync(`${argv.directory}/${filename}`, 'utf-8'));

    if (!spec.info.title) throw new Error(`Title not found in API specification: ${filename}`)

    return { name: spec.info.title, url: filename };
  });

if (!specs.length) throw new Error(`No specs found in directory: ${argv.directory}`);

const script = fs.readFileSync(argv.wrapper, 'utf-8')
                .replace(/urls: \[\]/, `urls: ${JSON.stringify(specs, null, 2)}`);

fs.writeFileSync(argv.output, script)