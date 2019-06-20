# cypress-included-example [![CircleCI](https://circleci.com/gh/bahmutov/cypress-included-example.svg?style=svg)](https://circleci.com/gh/bahmutov/cypress-included-example)
> Example running Cypress tests on CircleCI using cypress/included Docker image

Uses [cypress/included](https://github.com/cypress-io/cypress-docker-images/tree/master/included) Docker image, see file [circle.yml](circle.yml) (because this example runs on [CircleCI](https://circleci.com/gh/bahmutov/cypress-included-example)) and read ["Run Cypress with a single Docker command"](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/)

To run this example by itself inside a Docker container

```shell
docker run -it \
  -v $PWD:/e2e \
  -w /e2e \
  cypress/included:3.3.1
```

## Related

- ["Run Cypress included from Docker container"](https://glebbahmutov.com/blog/run-cypress-included-from-docker-container/)
- ["Run Cypress with a single Docker command"](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/)
