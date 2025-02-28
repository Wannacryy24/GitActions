pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                withCredentials([usernamePassword(credentialsId: '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', usernameVariable: 'GIT_USER', passwordVariable: 'GIT_PASS')]) {
                    sh 'git clone https://${GIT_USER}:${GIT_PASS}@github.com/Wannacryy24/GitActions.git'
                }
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'  // Run npm install
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'  // Run tests
            }
        }
    }
}
