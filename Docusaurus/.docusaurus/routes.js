import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/231saurus/blog',
    component: ComponentCreator('/231saurus/blog', '698'),
    exact: true
  },
  {
    path: '/231saurus/blog/archive',
    component: ComponentCreator('/231saurus/blog/archive', 'e61'),
    exact: true
  },
  {
    path: '/231saurus/blog/first-blog-post',
    component: ComponentCreator('/231saurus/blog/first-blog-post', '94c'),
    exact: true
  },
  {
    path: '/231saurus/blog/long-blog-post',
    component: ComponentCreator('/231saurus/blog/long-blog-post', '4c3'),
    exact: true
  },
  {
    path: '/231saurus/blog/mdx-blog-post',
    component: ComponentCreator('/231saurus/blog/mdx-blog-post', '782'),
    exact: true
  },
  {
    path: '/231saurus/blog/tags',
    component: ComponentCreator('/231saurus/blog/tags', 'e18'),
    exact: true
  },
  {
    path: '/231saurus/blog/tags/docusaurus',
    component: ComponentCreator('/231saurus/blog/tags/docusaurus', '720'),
    exact: true
  },
  {
    path: '/231saurus/blog/tags/facebook',
    component: ComponentCreator('/231saurus/blog/tags/facebook', '432'),
    exact: true
  },
  {
    path: '/231saurus/blog/tags/hello',
    component: ComponentCreator('/231saurus/blog/tags/hello', '643'),
    exact: true
  },
  {
    path: '/231saurus/blog/tags/hola',
    component: ComponentCreator('/231saurus/blog/tags/hola', 'bab'),
    exact: true
  },
  {
    path: '/231saurus/blog/welcome',
    component: ComponentCreator('/231saurus/blog/welcome', '2a8'),
    exact: true
  },
  {
    path: '/231saurus/markdown-page',
    component: ComponentCreator('/231saurus/markdown-page', 'a5e'),
    exact: true
  },
  {
    path: '/231saurus/docs',
    component: ComponentCreator('/231saurus/docs', 'ec5'),
    routes: [
      {
        path: '/231saurus/docs/category/tutorial---basics',
        component: ComponentCreator('/231saurus/docs/category/tutorial---basics', 'a63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/231saurus/docs/category/tutorial---extras',
        component: ComponentCreator('/231saurus/docs/category/tutorial---extras', '22a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/231saurus/docs/intro',
        component: ComponentCreator('/231saurus/docs/intro', 'aeb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/231saurus/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/231saurus/docs/tutorial-basics/congratulations', '0f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/231saurus/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/231saurus/docs/tutorial-basics/create-a-blog-post', 'e9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/231saurus/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/231saurus/docs/tutorial-basics/create-a-document', 'fc4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/231saurus/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/231saurus/docs/tutorial-basics/create-a-page', '73a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/231saurus/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/231saurus/docs/tutorial-basics/deploy-your-site', '67d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/231saurus/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/231saurus/docs/tutorial-basics/markdown-features', '379'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/231saurus/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/231saurus/docs/tutorial-extras/manage-docs-versions', 'f5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/231saurus/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/231saurus/docs/tutorial-extras/translate-your-site', '037'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/231saurus/',
    component: ComponentCreator('/231saurus/', '049'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
