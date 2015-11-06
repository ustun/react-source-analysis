import os
import pprint
from collections import Counter
all_files = "find . -type f -name '*.js' -exec ls -l {} \;"

files = os.popen(all_files).read().strip()
sizes = Counter()

exclude_patterns = ['webcomponents', 'test']

for row in files.split('\n'):
    row = row.strip()
    file = row.split(' ')[-1]
    size = int(row.split(' ')[7])
    found = False
    for pattern in exclude_patterns:
        if pattern in file:
            found = True
    if not found:
        sizes[file] = size

print '\n'.join([x[0].replace('./', '') for x in sizes.most_common(100)])
