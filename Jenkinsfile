pipeline {
    agent any 

    environment {
        DEPLOY_BRANCH = 'main'
    }

    stages {
        stage("Verify Branch") {
           steps {
            git branch: 'main', url: 'https://github.com/KanjiZain/Node-Example-AWS.git'
           }
        }

        stage("Build Docker Image") {
           steps {
            sh """
                # Build with build number
                docker build -t zainkanji/node-example-aws:${BUILD_NUMBER} .

                # Tag also as latest
                docker tag zainkanji/node-example-aws:${BUILD_NUMBER} zainkanji/node-example-aws:latest
            """

            echo 'Docker image built successfully'
           }
        }
    }
}
