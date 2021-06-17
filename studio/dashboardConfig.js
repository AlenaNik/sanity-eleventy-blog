export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60cb2faf69e1d0e05f7d4156',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-avpz94qr',
                  apiId: 'f51caf81-383a-4889-867e-3c66b6f80eb5'
                },
                {
                  buildHookId: '60cb2fafbcbe67d01aaed966',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-4xgzhi19',
                  apiId: 'a51b9e10-9c81-4dd6-9f43-848dc49f5ba5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AlenaNik/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-4xgzhi19.netlify.app', category: 'apps'}
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
