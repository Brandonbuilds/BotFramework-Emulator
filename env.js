process.env.COVERALLS_GIT_BRANCH = process.env.BUILD_SOURCEBRANCHNAME;
process.env.COVERALLS_GIT_COMMIT = process.env.BUILD_SOURCEVERSION;
process.env.CI_PULL_REQUEST = process.env.SYSTEM_PULLREQUEST_PULLREQUESTID;