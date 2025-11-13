pipeline {
    agent any 

    environment {
        DEPLOY_BRANCH = 'main'
    }

    stages {
        stage("Verify Branch") {
            when {
                expression { return env.GIT_BRANCH ==~ /.*${DEPLOY_BRANCH}$/ }
            }
            steps {
                echo "✅ Triggered on correct branch: ${env.GIT_BRANCH}"
            }
        }


        stage("Pipeline Finished") {
            when {
                expression { return env.GIT_BRANCH ==~ /.*${DEPLOY_BRANCH}$/ }
            }
            steps {
                echo "✅ Pipeline execution finished for ${DEPLOY_BRANCH}"
            }
        }
    }
}