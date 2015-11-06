ag --nofilename 'new ' | awk 'FS="new " {print $2}' | awk 'FS="(" {print $1}' | sort | uniq  
