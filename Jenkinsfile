pipeline {
  agent any 
  tools {
    nodejs 'NodeJS 15.5'
  }
  options {
    timeout(time: 2, unit: 'MINUTES')
  }
  stages {
    stage('Build') { 
      steps {
        sh 'yarn install'
      }
    }
    stage('Test') { 
      steps {
        sh 'yarn test'
      }
    }
  }
}