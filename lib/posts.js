import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {


  /* fs.mkdirSync(process.cwd() + '/newDir', { recursive: true }, (error) => {
    if (error) {
      console.error('An error occured: ', error);
    } else {
      console.log('Your directory was made!');
    }
  }); */

  /* fs.writeFile(process.cwd() + '/posts/newFile.txt', "New file content", (error) => {
    if (error) {
      console.error('An error occured: ', error);
    } else {
      console.log('Your file is made!');
    }
  }); */
/* createPost('newFile3.md', 
  `---
title: 'This is a Sport Story'
date: '2020-11-01'
category: ['sports', 'topStory']
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
  `) 
 */


  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      //content: matterResult.content
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}

export async function createDir( dirPath ){
  fs.mkdirSync(process.cwd() + dirPath, { recursive: true }, (error) => {
      if(error) {
          console.error('An error occured: ', error);
      } else {
          console.log('Your directory was made!');
      }
  });
}

function createPost(fileName, fileContent){
  fs.writeFile(process.cwd() + `/posts/${fileName}`, fileContent, (error) => {
      if(error){
          console.error('An error occured: ', error);
      } else {
          console.log('Your file is made!');
      }
  });
} 
