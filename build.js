import Handlebars from 'handlebars';
import source from './template.js';

const { compile } = Handlebars;
const template = compile(source);

const main = async _ => {
	try {
		console.log(template({}));
	} catch (error) {
		console.log(`${error}`);
		process.exit(1);
	}
};

main();
