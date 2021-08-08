pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    stages {
        stage ('Checkout'){
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/jenkins-test']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/billal-ayyoob/ET-expense-tracker.git']]])
            }
        }
        stage ('Build'){
            steps {
                sh 'npm install'
            }
        }
        stage ('Deploy'){
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
