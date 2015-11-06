import os
import pprint
from collections import Counter
all_files = "find . -type f -name '*.js' -exec ls -l {} \;"

files = os.popen(all_files).read().strip()
sizes = Counter()

excluded_files = ['webcomponents.js']

for row in files.split('\n'):
    row = row.strip()
    file = row.split(' ')[-1]
    size = int(row.split(' ')[7])
    if file not in excluded_files:
       sizes[file] = size

pprint.pprint(sizes.most_common(100))
