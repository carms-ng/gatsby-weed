
## What is a weed?🌱

“For the next online edition of SIGHTINGS, artists Eve Tagny (Tiohtià:ke/Montreal) and Io Makandal (Johannesburg) focus attention on weeds, considering their entanglements and breakages into human-controlled spaces. A cross-continental, collaborative project, What is a weed? attempts to map out a plant-centric “third landscape,” where weeds guide and deepen reflections into such themes as desirability, patterns of migration, botanical colonialism, ruptures between body and nature, as well as the tensions between organic and synthetic environments.” – What is a Weed?

[Live Site](http://ellengallery.concordia.ca/what-is-a-weed/)

[gh-pages](https://carms-dev.github.io/gatsby-weed/)

### Framework

- [Gatsby.js](https://www.gatsbyjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [styled-components](https://styled-components.com/)
- [AOS](https://michalsnik.github.io/aos/)

### Instruction to deploy to Concordia Server

1. Connect to VPN (username & password required)

2. Connect to server (username & password required)

```
ssh ${username}@${server}
# prompt for password
```
3. Go to the directory

```
cd /var/www/html/what-is-a-weed
```
4. Remove the existing files
```
rm -rf *
```
5. [Set path-prefix](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/)
```
# gatsby-config.js
module.exports = {
  pathPrefix: `/what-is-a-weed`,
}
```
6. Drop the public folder, if path-prefix changed
```
gatsby clean
```
7. Rebuild
```
gatsby build --prefix-paths
```
8. Push files to server
```
scp -r ${path}/gatsby-weed/public/* ${username}@${server}:/var/www/html/what-is-a-weed
```
