require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const gitHubData={
  "login": "vaibhavsingh-0101",
  "id": 183807335,
  "node_id": "U_kgDOCvStZw",
  "avatar_url": "https://avatars.githubusercontent.com/u/183807335?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/vaibhavsingh-0101",
  "html_url": "https://github.com/vaibhavsingh-0101",
  "followers_url": "https://api.github.com/users/vaibhavsingh-0101/followers",
  "following_url": "https://api.github.com/users/vaibhavsingh-0101/following{/other_user}",
  "gists_url": "https://api.github.com/users/vaibhavsingh-0101/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/vaibhavsingh-0101/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/vaibhavsingh-0101/subscriptions",
  "organizations_url": "https://api.github.com/users/vaibhavsingh-0101/orgs",
  "repos_url": "https://api.github.com/users/vaibhavsingh-0101/repos",
  "events_url": "https://api.github.com/users/vaibhavsingh-0101/events{/privacy}",
  "received_events_url": "https://api.github.com/users/vaibhavsingh-0101/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-10-04T08:14:30Z",
  "updated_at": "2025-04-26T09:12:53Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Vaibhav')
})

app.get('/login', (req, res) => {
  res.send('<h1>please login at chai aur code</h1>')
})

app.get('/github',(req,res)=>{
  res.json(gitHubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})