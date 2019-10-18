# whiskybook

An app to manage the documentation of your whisky tastings

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You will need the following tool installed an setted up on your computer
- Node.js 8
- git
- ssh

```
git clone git@github.com:Paquan/whiskybook.git
cd whiskybook

npm install
npm start
```

### Using Docker in VS Code

When using VS Code you can install the [Remote Development Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack). With it installed simply run the command Remote-Containers: Reopen in Container. VS Code will then build a Container with all the system dependencies of the programm (like node, git, parcel) installed.

Start your browser at: http://localhost:1234

### Fake-Backend

If you want to work with real backend:

```
npm start --env=local-real-backend
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
