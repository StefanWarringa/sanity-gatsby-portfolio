export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '620118522c8dc42d1234bd2d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rbywuvua',
                  apiId: '1b08cec4-6ded-48ca-ab6b-f25dd6b5c6a3'
                },
                {
                  buildHookId: '62011852853d9d23ec522742',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pvfixgo5',
                  apiId: '3458fd02-ae51-422e-89c7-83aa14d751ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StefanWarringa/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pvfixgo5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
