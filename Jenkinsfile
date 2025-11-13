pipeline {
    agent any 

    environment {
        DEPLOY_BRANCH = 'main'
    }

    stages {
        stage("Verify Branch") {
           steps {
            git branch: 'main', url: 'git@github.com:KanjiZain/Node-Example-AWS.git'
           }
        }
    }
}