pipeline {
    agent any
    environment {
        NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH_TOKEN') // Use the stored token
    }
    tools {
        nodejs "NodeJS 23.9.0"  // Use NodeJS plugin from Jenkins
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
