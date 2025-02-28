pipeline {
    agent any
    tools {
        nodejs "NodeJS 18"  // Use NodeJS plugin from Jenkins
    }
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm  // Let Jenkins handle the repository checkout
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'  // Install dependencies
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'  // Run tests
            }
        }
    }
}
