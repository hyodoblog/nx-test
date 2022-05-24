import { region } from 'firebase-functions'

export const lineBot = region('asia-northeast1').https.onRequest((req, res) => {
  res.send('hello')
})
