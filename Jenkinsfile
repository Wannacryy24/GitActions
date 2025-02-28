pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github-credentials-28Feb', usernameVariable: 'GIT_USER', passwordVariable: 'GIT_PASS')]) {
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
