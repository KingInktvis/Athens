module.exports = (app) => {
    app.get('/', (req, res) => {
        return res.send('hello world');
    });
}