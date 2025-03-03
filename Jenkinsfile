pipeline {
    agent any

    tools {
        nodejs "NodeJS 23.9.0"  // Ensure Node.js is installed in Jenkins
    }

     environment {
        NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH_TOKEN') // Fetch Netlify Token
        SITE_ID = '165858e8-1089-4a95-9416-5c64d89e5293' // Replace with your Netlify Site ID
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-credentials-28Feb',
                    url: 'https://github.com/Wannacryy24/GitActions.git'
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
                sh 'npx netlify deploy --prod --dir=build --auth=$NETLIFY_AUTH_TOKEN --site=$SITE_ID'
            }
        }
    }
}