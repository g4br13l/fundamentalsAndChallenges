
const GSM7_CHARS = ' !“#$%&\‘()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_abcdefghijklmnopqrstuvwxyz{|}~¡£¥§¿ÄÅÆÇÉÑÖOÜßàäåæèéìñòöoùü€‘'.split('');

function indexOfAnyButGsm7Char(str, startIndex, count) {

  if (str.length === 0) return -1;

  for (let i = startIndex; i < startIndex + count; i++) {
    if (!GSM7_CHARS.includes(str[i])) {
      return i;
    }
  }

  return -1;
}