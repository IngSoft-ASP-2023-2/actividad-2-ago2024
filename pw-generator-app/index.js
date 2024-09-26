const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const winston = require('winston');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [ new winston.transports.Console() ],
});

app.post('/create-user', async (req, res) => {
    try {
        const { CI, Name, Password } = req.body;

        const saltRounds = 15;
        const hashedPassword = await bcrypt.hash(Password, saltRounds);

        logger.info('User created', { CI, Name });

        res.json({ CI, Name, HashedPassword: hashedPassword });
    } catch (error) {
        logger.info('Error creating user', { error: error.message });
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
