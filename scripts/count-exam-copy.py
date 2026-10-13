"""Count visible case body copy, excluding headings, captions and UI labels."""
from pathlib import Path
import ast
import html
import json
import re

root = Path(__file__).resolve().parents[1]
s = (root / 'src/pages/vuuh-project-page.jsx').read_text()
headings = list(re.finditer(r'<SectionHeading number="(\d+)">([^<]+)</SectionHeading>', s))
vuuh = len(re.search(r'<p className="vuuh-intro">(.*?)</p>', s, re.S).group(1))
for i, heading in enumerate(headings):
    end = headings[i + 1].start() if i + 1 < len(headings) else s.index('<dialog className="vuuh-lightbox"')
    block = s[heading.end():end]
    for match in re.finditer(r'<p\b[^>]*>(.*?)</p>', block, re.S):
        text = match.group(1)
        if text == '{text}':
            findings = re.search(r'<div className="vuuh-findings">\s*\{\[(.*?)\]\.map', block, re.S).group(1)
            for row in re.findall(r'\[([^\n]+)\]', findings):
                tokens = re.findall(r'"(?:[^"\\]|\\.)*"|\'(?:[^\'\\]|\\.)*\'', row)
                vuuh += len(ast.literal_eval(tokens[1]))
        else:
            vuuh += len(re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', text))).strip())
counts = {'vuuh': vuuh}
for slug, case in json.loads((root / 'src/data/exam-cases.json').read_text()).items():
    counts[slug] = len(case['intro']) + sum(len(p) for section in case['sections'] for p in section['paragraphs'])
for slug, count in counts.items():
    print(f'{slug}: {count}')
print(f'I alt: {sum(counts.values())}')
print(f'Buffer: {12000 - sum(counts.values())}')
assert sum(counts.values()) <= 12000, 'Eksamensbudget overskredet'
