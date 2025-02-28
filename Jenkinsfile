pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/user/repository.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'  
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'  
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo Deploying...'
            }
        }
    }
}
