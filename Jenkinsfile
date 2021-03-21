pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'yarn install'
      }
    }

    stage('Check code') {
      parallel {
        stage('Test') {
          steps {
            sh 'yarn test'
          }
        }

        stage('Linter') {
          steps {
            sh 'yarn tslint'
          }
        }

      }
    }

  }
  tools {
    nodejs 'NodeJS 15.5'
  }
  options {
    timeout(time: 2, unit: 'MINUTES')
  }
}