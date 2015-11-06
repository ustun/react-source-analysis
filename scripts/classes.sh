ag --nofilename '\.prototype' | awk 'FS=".prototype" {print $1}' | awk '{print $1}' | sort | uniq
