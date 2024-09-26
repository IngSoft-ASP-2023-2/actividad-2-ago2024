const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [ new winston.transports.Console() ],
});

app.get('/health', async (res) => {
    try {
        res.json({"status": "healthy"});
    } catch (error) {
        logger.info('API error', { error: error.message });
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
