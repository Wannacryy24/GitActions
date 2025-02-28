pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: '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', url: 'https://github.com/Wannacryy24/GitActions.git', branch: 'main'
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
