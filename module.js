import { BarItem, SettingsCategory, SettingsInput } from 'https://flow-os.liquid.is-a.dev/scripts/classes.js';

const customText = new BarItem('custom_text');
new SettingsCategory('custom_text', 'Custom Text',
    new SettingsInput('text', 'Text', 'Hello World!', 'Hello World!'),
);

customText.setText(config.settings.get('custom_text').text);

export default customText;
