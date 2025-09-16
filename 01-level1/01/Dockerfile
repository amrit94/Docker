# Step 1: Base image
FROM alpine
# alpine is an OS, min docker image, based on Alpine Linux
# Its small, simple and secure

# Step 2: Executes while build and Install a software
RUN apk add binutils

# Step 2.5: Configure that software

# Step 3: Executes when container is created
# Set default commands
CMD ["echo", "Hello World... from my first docker image"]
