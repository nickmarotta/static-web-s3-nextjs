# static-web-s3-nextjs
## Usage:

To run the app locally use:

```sh
npm run dev
```

To compile as a static webapp and test to make sure your features work statically, you can run the following command to generate the `./out` folder.

```sh
npm run build
```

To test you'll need to start a web server in the `./out` folder.

```sh
cd ./out

//Python3
python -m http.server 8000

//Python2
python -m SimpleHTTPServer 8000
```

## Deploy:

You can deploy by doing

```sh
npm run deploy --deployEnv=dev
```

See https://dev.to/felipperegazio/handling-command-line-arguments-in-npm-scripts-2ean for information on the `$npm_config_myVar` syntax. Open to feedback on this!

The stack outputs these urls as variables