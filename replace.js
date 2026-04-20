import fs from 'fs';
import path from 'path';

let content = fs.readFileSync('/src/app/components/GuestPage.tsx', 'utf-8');

// Replace common patterns
content = content.replace(/style=\{\{\s*fontFamily:\s*"var\(--font-strawberry-display\)",\s*fontSize:\s*"var\(--text-2xl\)",\s*fontWeight:\s*"var\(--font-weight-medium\)",\s*color:\s*"var\(--color-foreground\)"\s*\}\}/g, 'className="font-strawberry-display text-[length:var(--text-2xl)] font-medium text-foreground"');

content = content.replace(/style=\{\{\s*fontFamily:\s*"var\(--font-strawberry-display\)",\s*fontSize:\s*"var\(--text-xl\)",\s*fontWeight:\s*"var\(--font-weight-medium\)"\s*\}\}/g, 'className="font-strawberry-display text-[length:var(--text-xl)] font-medium"');

content = content.replace(/style=\{\{\s*fontFamily:\s*"var\(--font-strawberry-text\)",\s*fontSize:\s*"var\(--text-base\)",\s*fontWeight:\s*"var\(--font-weight-bold\)",\s*color:\s*"var\(--color-foreground\)"\s*\}\}/g, 'className="font-strawberry-text text-[length:var(--text-base)] font-bold text-foreground"');

content = content.replace(/style=\{\{\s*fontFamily:\s*"var\(--font-strawberry-text\)",\s*fontSize:\s*"var\(--text-sm\)",\s*color:\s*"var\(--color-muted-foreground\)"\s*\}\}/g, 'className="font-strawberry-text text-[length:var(--text-sm)] text-muted-foreground"');

content = content.replace(/style=\{\{\s*fontFamily:\s*"var\(--font-strawberry-text\)",\s*fontSize:\s*"var\(--text-sm\)",\s*color:\s*"var\(--color-foreground\)"\s*\}\}/g, 'className="font-strawberry-text text-[length:var(--text-sm)] text-foreground"');

content = content.replace(/style=\{\{\s*fontFamily:\s*"var\(--font-strawberry-text\)",\s*fontSize:\s*"var\(--text-xs\)",\s*fontWeight:\s*"var\(--font-weight-bold\)",\s*color:\s*"rgba\(90,0,50,0\.6\)"\s*\}\}/g, 'className="font-strawberry-text text-[length:var(--text-xs)] font-bold text-[rgba(90,0,50,0.6)]"');

content = content.replace(/style=\{\{\s*fontFamily:\s*"var\(--font-strawberry-text\)",\s*fontSize:\s*"var\(--text-xs\)",\s*fontWeight:\s*"var\(--font-weight-bold\)",\s*color:\s*"var\(--color-foreground\)"\s*\}\}/g, 'className="font-strawberry-text text-[length:var(--text-xs)] font-bold text-foreground"');

content = content.replace(/style=\{\{\s*fontFamily:\s*"var\(--font-strawberry-text\)",\s*fontSize:\s*"var\(--text-xs\)",\s*fontWeight:\s*"var\(--font-weight-regular\)",\s*color:\s*"var\(--color-muted-foreground\)"\s*\}\}/g, 'className="font-strawberry-text text-[length:var(--text-xs)] font-normal text-muted-foreground"');

content = content.replace(/style=\{\{\s*fontFamily:\s*"var\(--font-strawberry-text\)",\s*fontSize:\s*"var\(--text-sm\)",\s*fontWeight:\s*"var\(--font-weight-bold\)",\s*color:\s*"var\(--color-primary\)"\s*\}\}/g, 'className="font-strawberry-text text-[length:var(--text-sm)] font-bold text-primary"');

// Save the file
fs.writeFileSync('/src/app/components/GuestPage.tsx', content);

console.log("Replaced inline styles");
