const fs = require('fs');

/**
 * style-loader: add css style to head
 * @param {string} source - css style
 */
const styleLoader = (source) => {
  let style = document.createElement('style');
  style.innerText = `${JSON.stringify(source).replace(/\\r\\n/g, '')}`;
  document.head.appendChild(style);
};

const fileName = './src/index.css';
let content = fs.readFileSync(fileName);
if (/\.css$/.test(fileName)) {
  content = styleLoader(content);
}
