import fs from 'fs';


export default async function handler(req, res) {
    fs.writeFileSync(process.cwd() + `/posts/newFile.md`, 
    `---title: 'This is a Style Story'
    date: '2020-12-25'
    category: ['style', 'topStory']---
  
  Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.
  
  - **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
  - **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.
  
  Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using`, (error) => {
        if (error) {
            res.status(400).json({ text: 'there was an error' })
        } else {
            res.status(200).json({ text: 'successful' })
        }
    });
}