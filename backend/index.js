const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');
const PORT = 4000;

app.use(cors())
app.use(express.json())

app.use(express.static('dist'));

app.use("/api/posts",require("./controllers/postsApi"))
app.use("/api/loginSignup",require("./controllers/loginSignUp"))

const DATABASE_CONNECTION_STRING = 'mongodb+srv://parul:123@cluster0.up1mfjz.mongodb.net/mediumClone'

mongoose.connect(DATABASE_CONNECTION_STRING).then(() => console.log("Connected to DataBase!")).catch((e) => console.error("Couldn't Connect to database due to:",e.message))
// const Post = mongoose.model('Post', postsSchema);

app.put('/api/posts/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Error updating post' });
  }
});
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
  });

app.listen(PORT, () => console.log("Server Running on port:",PORT));