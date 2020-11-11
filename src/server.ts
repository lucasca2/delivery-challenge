import app from './app'

app.listen(process.env.PORT, () => {
  console.log(`API iniciada (PORTA:${process.env.PORT})`)
})
