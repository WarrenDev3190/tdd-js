const math = require('./math/index');

document.getElementById('app')
.innerHTML = `
  If you're seeing this, it's working :)
  ${math.add(1,2)}
`;
