export function makeFirstLetterUppercase(line: string): string {
    return line.charAt(0).toUpperCase() + line.slice(1);
}

export function makeFirstUppercaseString(lines: string[]): string {
    return lines.map((line) => makeFirstLetterUppercase(line)).join(', ');
}
