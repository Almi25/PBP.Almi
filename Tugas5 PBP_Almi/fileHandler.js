const fs = require('fs');
function tulisFile(namaFile, data) {
  fs.writeFileSync(namaFile, data);
  return `File ${namaFile} berhasil dibuat.`;
}
module.exports = tulisFile;
