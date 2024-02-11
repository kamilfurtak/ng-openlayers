pipeline {
  agent any
  environment {
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
          sh 'npm run build'
        }
      }
    }
//   stage('Release: Github') {
//       when {
//           expression { return env.GIT_TAG_NAME =~ /^v\d+.\d+.\d+$/ }
//       }
//       steps {
//           // Assuming that you have already configured GitHub credentials in Jenkins
//           withCredentials([string(credentialsId: 'github_oauth_token', variable: 'GITHUB_OAUTH_TOKEN')]) {
//               sh '''
//                   cd dist/lib/ng-openlayers
//                   npm pack
//                   git tag ${env.GIT_TAG_NAME}
//                   git push origin --tags
//               '''
//           }
//       }
//   }


// stage('Release: Github Pages') {
//     when {
//         expression { return env.GIT_TAG_NAME =~ /^\d+.\d+.\d+-next.\d+$/ }
//     }
//     steps {
//         sh 'cd dist/demo-ng-openlayers'
//         // Implementation of deploying to GitHub Pages would depend on your specific setup
//     }
// }

// stage('Deploy: NPM') {
//     when {
//         expression { return env.GIT_TAG_NAME =~ /^\d+.\d+.\d+-next.\d+$/ }
//     }
//     steps {
//         withCredentials([usernamePassword(credentialsId: 'npm_credentials', usernameVariable: 'NPM_EMAIL', passwordVariable: 'NPM_TOKEN')]) {
//             sh '''
//                 cp projects/ng-openlayers/CHANGELOG.md dist/ng-openlayers-publish/CHANGELOG.md
//                 cd dist/ng-openlayers-publish
//                 npm publish --tag next
//             '''
//         }
//     }
// }
  }
}
