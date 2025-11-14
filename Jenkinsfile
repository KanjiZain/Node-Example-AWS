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
                    docker build -t zainkanji/node-example-aws:${BUILD_NUMBER} .
                    docker tag zainkanji/node-example-aws:${BUILD_NUMBER} zainkanji/node-example-aws:latest
               """
               echo 'Docker image built successfully'
           }
        }

        stage("Push to Docker Hub") {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerId', passwordVariable: 'pass', usernameVariable: 'user')]) {
                    sh """
                        docker login -u $user -p $pass
                        docker push zainkanji/node-example-aws:${BUILD_NUMBER}
                        docker push zainkanji/node-example-aws:latest
                        docker image rmi zainkanji/node-example-aws:${BUILD_NUMBER} zainkanji/node-example-aws:latest
                    """
                }
            }
        }

     stage("Deploy to AWS") {
          steps {
            sh """
                docker stop node-example-aws || true
                docker rm node-example-aws || true
                docker run -d --name node-example-aws -p 3000:3000 zainkanji/node-example-aws:${BUILD_NUMBER}
            """
        }
     }
    }
}
