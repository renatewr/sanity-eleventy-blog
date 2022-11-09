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
                  buildHookId: '636bf54844dbb60077d30e69',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-2h55qs76',
                  apiId: '4717d4cc-8319-4328-ba83-f0b4dae2afdf'
                },
                {
                  buildHookId: '636bf549ebd79a007cff3756',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-gwca7x87',
                  apiId: 'fc70157e-b851-448f-a620-39c67333fb98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/renatewr/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-gwca7x87.netlify.app', category: 'apps'}
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
