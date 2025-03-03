pipeline {
     agent { docker { image 'node:latest' } }

    tools {
        nodejs "NodeJS 18"  // Ensure Node.js is installed in Jenkins
    }

     environment {
        NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH_TOKEN') // Fetch Netlify Token
        SITE_ID = '165858e8-1089-4a95-9416-5c64d89e5293' // Replace with your Netlify Site ID
    }

    options {
        failFast true // Stop execution if any stage fails
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm  // Checks out the source code from the repository
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'  // Adjust for your framework (React, Vue, etc.)
            }
        }

        stage('Deploy to Netlify') {
            when {
                branch 'main'
            }

            steps {
                withCredentials([string(credentialsId: 'NETLIFY_AUTH_TOKEN', variable: 'NETLIFY_AUTH_TOKEN')]) {
                    sh 'npx netlify deploy --prod --dir=build --auth=$NETLIFY_AUTH_TOKEN --site=$SITE_ID'
                }
            }
        }
    }
}
