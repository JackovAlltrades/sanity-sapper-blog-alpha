export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5f2a2aff860ac2bf40456094',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-alpha-studio',
                  apiId: 'f0c9e9c6-9c49-4cd0-a07b-83805dece21a'
                },
                {
                  buildHookId: '5f2a2aff860ac2fe02455ff3',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-alpha',
                  apiId: '8cf59a39-ef1c-4e25-9a38-021dfa09032a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JackovAlltrades/sanity-sapper-blog-alpha',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-alpha.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
