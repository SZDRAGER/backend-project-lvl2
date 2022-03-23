install: install-deps

install-deps:
	npm ci

publish: 
	npm publish --dry-run

lint:
	npx eslint .

link:
	npm link

lint-fix:
	npx eslint --fix .

test:
	npx jest

test-coverage:
	npx jest --coverage 
