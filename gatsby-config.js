module.exports = {
  siteMetadata: {
    title: 'Offline2On',
    description:
      'Cross-platform iniative, we are all about helping the merchants that need it to ensure their businesses don’t go bust.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyzPBryOn57sEXeF`,
        concurrency: 5,
        tables: [
          {
            baseId: `applFwG4oIRWUq6t2`,
            tableName: `Directory`,
            defaultValues: {
              'Contact_Name': '',
              'Email': '',
              'Phone': '',
              'Business_Name': '',
              'Merchant_Vertical': '',
              'Merchant_Ships': false,
              'Merchant_Budget': '',
              'Location': '',
              'Notes': '',
              'Agency_Expertise': '',
              'Agency_Platforms': '',
              'Type': '', // Agency | Merchant
              'Created_At': '',
              'Updated_At': '',
              'Published': false,
            }
          }
        ]
      }
    },
  ],
}
