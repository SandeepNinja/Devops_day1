pipeline{
    agent any   
    stages{
        stage('Install Depedencies'){
            steps{
                bat 'npm install'
            }
        }
        stage('Run Tests'){
            steps{
                bat 'npm test'
            }
        }
    }
}