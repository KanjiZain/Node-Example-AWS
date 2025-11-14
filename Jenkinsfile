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
            sh 'docker image build -t zainkanji/node-example-aws:$Build_ID .'
            sh 'docker image tag zainkanji/node-example-aws:$Build_ID zainkanji/node-example-aws:latest'
            echo 'Docker image built successfully'
           }
        }
    }
}