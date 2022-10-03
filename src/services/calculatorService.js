
export function operationToSign(operation) {
    switch (operation) {
        case 'add': return '\u002b'
        case 'sub': return '\u2212'
        case 'mul': return "\u00d7"
        case 'div': return '\u00f7'
        case 'neg': return '\u002d'
        case 'paren_start': return '('
        case 'paren_end':   return ')'
    }
}
