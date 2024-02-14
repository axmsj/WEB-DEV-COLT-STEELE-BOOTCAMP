import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
  const errorMsg = "SORRY COULDN'T FIGURE IT OUT, TRY WITH MORE TEXT";
  console.log(colors.red(errorMsg));
} else {
  const language = langs.where('3', langCode);
  console.log(`Our best guess is: ${language.name.rainbow}`);
}
