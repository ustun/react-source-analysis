import os
from collections import Counter
import pprint

all_files = "find . -type f -name '*.js' -exec ls -l {} \;"

files = os.popen(all_files).read().strip()
sizes = Counter()

for row in files.split('\n'):
    row = row.strip()
    file = row.split(' ')[-1]
    if 'test' in file:
        continue
    size = int(row.split(' ')[7])
    sizes[file] = size

pprint.pprint(sizes.most_common(100))
