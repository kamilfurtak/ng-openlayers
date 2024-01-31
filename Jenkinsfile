pipeline {
  agent any
  environment {
    // Extract Node version
    nodeVersion = '20.11.0'
  }

  stages {
    stage('install packages') {
      steps {
        nodejs(nodeJSInstallationName: nodeVersion) {
          sh 'npm ci'
        }
      }
    }

    stage('build') {
      steps {
        nodejs(nodeJSInstallationName: nodeVersion) {
          sh 'npm run build:lib'
          sh 'cp -r dist/ngx-ol dist/ngx-ol-publish'
          sh 'npm run build:demo --base-href "/ngx-ol/"  --progress false'
        }
      }
    }
    // Other stages omitted for brevity...
  }
}
