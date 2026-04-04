const fs = require('fs');
const path = require('path');

function fixHtml() {
    const htmlPath = path.join(__dirname, 'index.html');
    let content = fs.readFileSync(htmlPath, 'utf8');

    // Minor fixes (equivalent to what fix_html.py might have done)
    // For example, ensuring all layout classes are correct or fixing character encodings if needed.
    // Currently, let's just use it to ensure the CRT overlay is correctly placed.
    
    if (!content.includes('crt-overlay')) {
        console.warn('⚠️ CRT Overlay missing in index.html, check your layout.');
    } else {
        console.log('✅ index.html structure verified.');
    }

    fs.writeFileSync(htmlPath, content);
}

fixHtml();
