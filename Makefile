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


colony:
	mkdir -p colony_report
	cp *.js colony_report
	colony --no-modules colony_report/*.js -o colony_report/report

colony_serve:
	serve -p 3456

colony_output:
	open http://localhost:3456/colony_report/report
