

dependencies:
	@node analyze_modules.js
	@echo "Output in output/ folder"

espree:
	node scripts/espree_test.js


jscomplexity:
	mkdir -p complexity_report
	cp *.js complexity_report
	(cd ./complexity_report/; jscomplexity -r all)
	open complexity_report/jscomplexity-report.html
