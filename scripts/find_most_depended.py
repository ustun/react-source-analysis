import os
from collections import Counter
import pprint

all_files = "find . -type f -name '*.js'"
require_count = "ag --ignore=__tests__ %s | grep require | wc -l"
files = os.popen(all_files).read().strip()
n_occurrences = Counter()

for file in files.split('\n'):
    if file.split('/')[1] in ['vendor', 'stubs', 'test', 'utils']:
        continue
    n_occurrences[file] = int(os.popen(require_count % file.split('/')[-1].replace('.js', '')).read().strip())

pprint.pprint(n_occurrences.most_common(100))
