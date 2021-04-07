# Flagpack

Flagpack contains 260+ flag icons to easily use within your code project. Flagpack is an open source project and available for JavaScript frameworks/libraries Angular, Vue and React.

![Flagpack. 260+ easily implementable flag icons to use in your design or code project. Open Source. Available for Sketch, Figma, Angular, Vue, and React. [www.flagpack.xyz](http://www.flagpack.xyz). Made with love by Yummygum. Graphic showing a list with the flags of Argentina, Croatia, Estonia, Kenia, Netherlands, and Scotland.](https://flagpack.xyz/meta-image.png)

[View documentation on flagpack.xyz](https://flagpack.xyz/docs/)

## flagpack-core
<p>
  <a href="https://www.npmjs.com/package/flagpack-core" target="_blank">
    <img src="https://img.shields.io/npm/v/flagpack-core.svg?style=flat" />
  </a>
  <a href="https://www.npmjs.com/package/flagpack-core" target="_blank">
    <img src="https://img.shields.io/npm/dt/flagpack-core.svg?style=flat" />
  </a>
  <a href="https://github.com/sponsors/Yummygum" target="_blank">
    <img src="https://img.shields.io/badge/Support-♥-E94AAA"  />
  </a>
  <a href="https://twitter.com/flagpack" target="_blank">
    <img src="https://img.shields.io/twitter/follow/flagpack.svg?style=social&label=follow"  />
  </a>
</p>
The core has been created to provide and share any logic and assets to the desired components. For example, it can also be used to map over the `countryCodeList.json` to display all flags.

## Installation
Normally if you'll use any component the core will be automatically installed as peer dependency. If you want to test the core, you'll need to install one of the components and install the core as local module.

### Example
```bash
# install local module to one of the components
npm install ../path/to/flagpack-core
```

## Build Dist
You'll need an `.env` file with a `SPREADSHEET_KEY` and `API_KEY` to be able to build the `generateCodeList.js` script to make the request to the GoogleAPI to fetch the flags data.

If you just want to make changes to the `generateFlags.js`, the `.env` is not needed, just use the current `countryCodeList.json`.

```bash
# install dependencies
npm install

# build for prod
npm run build

# build with watcher for dev
npm run dev
```

## Releasing
To release a new version you'll need to make sure all changes commits are done and pushed. After that you'll need to decide which release type you want to use. The release types are; patch (0.0.1), minor (0.1.0), or major (1.0.0).
```
npm version <release_type>
```
This will update the version number in the `package.json`, and will add a git tag automatically. Next you'll need to push the git tag to the remote.
```
git push --tags origin master
```
After that you'll need to publish to npm.
```
npm publish
```

When you're confident with the release, make sure the version tag is also released at GitHub.

## Support

[Frequently Asked Questions](http://dev.flagpack.xyz/support/)

[Documentation](http://dev.flagpack.xyz/docs/)

## Releases

You can find a changelog of Flagpack's releases on the [Releases page](https://github.com/Yummygum/flagpack-core/releases) on GitHub.

## Contribute

If you're interested in contributing to this project, great! Please see the [contributing document](CONTRIBUTING.md).

## License

Flagpack is an open source project published under a [MIT license](LICENSE).
