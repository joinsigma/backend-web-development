# What does this directory contain?
The `routes` directory will contain the files for the route configuration. If the file is on the base level of the directory, it means this routing configuration is not affected by any versioning i.e. Health Check routes. However, if there's a file `v1` or `vX`, where `X` is a version number, the routing configuration will be separated by that version of the application.